import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MateriasService } from '../materias/materias.service';
import { MateriasController } from '../materias/materias.controller';
import { Materia, MateriaSchema } from '../schemas/materia.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Materia.name, schema: MateriaSchema }])],
  providers: [MateriasService],
  controllers: [MateriasController],
})
export class MateriasModule {}
