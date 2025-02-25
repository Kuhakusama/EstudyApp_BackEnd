import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Materia extends Document {
  @Prop({ required: true })
  nome: string;
}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
