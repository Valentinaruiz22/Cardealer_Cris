import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { DeleteCarDto } from './dto/delete-car.dto';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post(':id')
  create(@Body() createCarDto: CreateCarDto) {
    return "Aqui se van a REGISTRAR los carros";
  }

  @Get()
  findAll() {
    return "Aqui se van a CONSULTAR los carros";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return "Aqui se van a ACTUALIZAR el carro con el ID: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteCarDto: DeleteCarDto)  {
    return "Aqui se van a ELIMINAR los carros";
  }

  @Put()
  replace() {
    return "Aqui se van a REMPLAZAR los carros";
  }
}
