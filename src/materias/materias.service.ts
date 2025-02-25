import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia } from '../schemas/materia.schema';

@Injectable()
export class MateriasService {
  constructor(@InjectModel(Materia.name) private materiaModel: Model<Materia>) {}

  async findAll(): Promise<Materia[]> {
    return this.materiaModel.find().exec();
  }

  async findById(id: string): Promise<Materia> {
    return this.materiaModel.findById(id).exec();
  }
}
