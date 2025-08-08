import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  create(@Param('id') id: string,  createProfesorDto: CreateProfesorDto) {
    return "Aqui se van a REGISTRAR los profesores";
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return "Aqui se van a Consultar los profesores" + id ;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesorDto: UpdateProfesorDto) {
    return "Aqui se van a ACTUALIZAR el profesor con el ID: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aqui se vana a Eliminar los profesores con el ID: " + id;
  }
}
