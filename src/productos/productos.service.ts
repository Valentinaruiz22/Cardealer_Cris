import { Producto } from './entities/producto.entity';
import { productos } from './../../generated/prisma/index.d';
import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductosService {

constructor(private PrismaService: PrismaService){}  

  
  create(ProductoDto: CreateProductoDto) {
   return this.PrismaService.productos.create({
    data:{
      nombre: ProductoDto.nombre,
      precio: ProductoDto.precio
    }
   })
  }

  findAll() {

  }

  findOne(id: number) {

   
   
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
