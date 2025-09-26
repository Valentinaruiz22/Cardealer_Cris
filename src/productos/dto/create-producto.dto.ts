import { IsNotEmpty, IsNumber, Min, Max } from "class-validator";

export class CreateProductoDto {
    @IsNotEmpty({ 
        message: 'el nombre es requerido'

    })
    nombre: string;
    @IsNotEmpty({
    
        message: 'el precio es requerido'
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(100)
    @Max(1000000)
    precio: number

}
