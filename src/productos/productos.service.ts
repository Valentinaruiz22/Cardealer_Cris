import { Producto } from './entities/producto.entity';
import { productos } from './../../generated/prisma/index.d';
import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductosService {

constructor(private servicio: PrismaService){}  

  
  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
  }

  findAll() {
    return this.servicio.productos.findMany()
  }

  findOne(id: number) {

    return this.servicio.productos.findFirst({})

   
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
