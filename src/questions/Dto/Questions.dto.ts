// Importando as bibliotecas necessárias
import { IsBoolean, IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// Definição do DTO para a alternativa
export class AlternativeDto {
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsNotEmpty()
  @IsBoolean()
  correta: boolean;
}

// Definição do DTO para a questão
export class QuestionDto {
  @IsNotEmpty()
  @IsString()
  enunciado: string;

  @IsArray()
  @IsString({ each: true })
  Tags: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlternativeDto)
  alternativas: AlternativeDto[];
}
