import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

    @Post()
    create(@Param('id') id: string, @Body() createAdministradorDto: CreateAdministradorDto) {
      return "Aqui se van a REGISTRAR los Administradores";
    }

 @Get()
  findAll(@Param('id') id: string) {
    return "Aqui se van a Consultar los Administradores";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return "Aqui se van a ACTUALIZAR los Administradores con el ID: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Aqui se vana a Eliminar los Administradores con el ID: " +id;
  }
}
