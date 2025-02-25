import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpException, 
    Param, 
    Patch, 
    Post, 
    UsePipes, 
    ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./Dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./Dto/UpdateUser.dto";
import { User } from "src/schemas/User.schema";

@Controller('users') //map router para o controlller
export class UsersController {
    
    constructor(private usersService: UserService) {}

    @Post('signup') 
    //@UsePipes(new ValidationPipe()) isso caso eu nao queira usar as pipes de forma global
    async createUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto)
        const newUser= await this.usersService.createUser(createUserDto);
        console.log("Novo Usarioa:", newUser);
    }

    @Post('login') 
    //@UsePipes(new ValidationPipe()) isso caso eu nao queira usar as pipes de forma global
    loginUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto)
        return this.usersService.loginUser(createUserDto);
    }
    
    @Get()
    getUsers():Promise<User[]>{
        return this.usersService.getUsers();
    }

    @Get(':id')
    async getUsersById(@Param('id') id:string) {

        const isValid = mongoose.Types.ObjectId.isValid(id) //return boolean
        if(!isValid) throw new  HttpException("User not found",400)//se não for valido ele retorna
        
        const findUser = await this.usersService.getUsersById(id) // this is gonna  be undefined if the user not exists
        if(!findUser) throw new HttpException('User not found', 404) //this is gonna make  the server response with a status of 404 and a message saying that user was not found
        return findUser;
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe()) //put is all the resources, patch partes of the resource
    async updateUser( //sinze reutrn a promisse the function need to be a async function that a already really well
        @Param('id') id:string, 
        @Body() updateUserDto: UpdateUserDto)
        { //needs a request body(dto)
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException('invalid ID', 400);
        const updateUser = await  this.usersService.updateUser(id, updateUserDto) //this.service rerturn a fuck promisse
        if(!updateUser) throw new HttpException('User not Found', 404);
        return updateUser;
    }

    @Delete(':id')
    async deleteUser( @Param('id') id : string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException('invalid ID', 400);
        const deleteUser = await this.usersService.deleteUser(id)
        if(!deleteUser) throw new HttpException('User not found', 404);
        return;
    }

   
}