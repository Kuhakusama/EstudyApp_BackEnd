import { Controller, Get, Param } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { Materia } from '../schemas/materia.schema';

@Controller('materias')
export class MateriasController {
  constructor(private readonly materiasService: MateriasService) {}

  @Get()
  async findAll(): Promise<Materia[]> {
    return this.materiasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Materia> {
    return this.materiasService.findById(id);
  }
}
