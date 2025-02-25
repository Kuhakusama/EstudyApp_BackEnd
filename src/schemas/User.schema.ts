import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true //cria a data de criação do usario
})
export class User {
    

    @Prop({unique:true, required:true})
    username: string;

    @Prop({unique:true, required:true})
    email: string;

    @Prop({unique:true, required:true})
    cpf: string;    

    @Prop({required:true})
    senha: string;

    @Prop({ required:true})
    telefone: string;

    @Prop({required:true,})
    nascimento: Date;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)
