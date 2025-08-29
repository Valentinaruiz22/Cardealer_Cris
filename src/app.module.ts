import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [CarsModule, EstudianteModule, AdministradorModule, ProfesorModule, PrismaModule, MarcasModule, ProductosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
