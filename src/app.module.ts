import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ProfesorModule } from './profesor/profesor.module';

@Module({
  imports: [CarsModule, EstudianteModule, AdministradorModule, ProfesorModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
