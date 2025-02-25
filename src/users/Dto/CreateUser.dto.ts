// user.dto.ts
import { IsString, IsEmail, IsDateString, IsOptional, } from 'class-validator';


export class CreateUserDto {
  
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  senha: string;

  @IsString()
  telefone: string;


  @IsDateString()
  nascimento: string;

  @IsOptional()
  @IsDateString()
  createdAt: string;
}
