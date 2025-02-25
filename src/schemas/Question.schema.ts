import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Questao extends Document {
  @Prop()
  enunciado: string;

  @Prop()
  tags: string[];

  @Prop()
  alternativas: Alternativa[];
}

@Schema()
export class Alternativa {
  @Prop()
  texto: string;

  @Prop()
  correta: boolean;
}

export const QuestaoSchema = SchemaFactory.createForClass(Questao);