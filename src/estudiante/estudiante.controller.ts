import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  create(@Param('id') id: string, @Body()createEstudianteDto: CreateEstudianteDto) {
    return "Aqui se van a REGISTRAR los estudiantes";
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return "Aqui se van a Consultar los estudiantes" + id;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return "Aqui se van a ACTUALIZAR el estudiante con el ID: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aqui se vana a Eliminar los estudiantes con el ID: " +id;
  }
}
