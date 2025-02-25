import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { CreateUserDto } from "./Dto/CreateUser.dto";
import { UpdateUserDto } from "./Dto/UpdateUser.dto";


@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);

    constructor(@InjectModel(User.name) private  userModel: Model<User>) {}

    async createUser(CreateUserDto: CreateUserDto) {    
        const newUser = new this.userModel(CreateUserDto)
        const savedUser =  await newUser.save();

        this.logger.log(`Novo usuário criado: ${savedUser}`);
        return savedUser;
    }

    async loginUser(CreateUserDto: CreateUserDto) {
        const newUser = new this.userModel(CreateUserDto)
        const savedUser =  await newUser.save();

        this.logger.log(`Novo usuário criado: ${savedUser}`);
        return savedUser;
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find()
        this.logger.log(`Todos os usuários: ${users}`);
        return users;
    }

    getUsersById(id: string){
        return this.userModel.findById(id) //this is gonna return a  promise, so we need to use .then or async await
    }

    updateUser(id: string, updateUserDto:UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true}) //find by Id and use as the filter dto and new return the new document
    }

    deleteUser(id:string){
        return  this.userModel.findByIdAndDelete(id);
    }

    
}