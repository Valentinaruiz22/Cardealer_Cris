import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//establecer validaciones
//de formato de request:
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,//lanza un mensaje de error 
                    //en caso de atributos 
                    //que no esten en el DTO
  forbidNonWhitelisted: true,//quita atributos
                            //que no esten en el DTO 
  transform: true, //transforma los tipos de datos
                  //dato en el request al tipo 
                  //del DTO
  })
)

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
