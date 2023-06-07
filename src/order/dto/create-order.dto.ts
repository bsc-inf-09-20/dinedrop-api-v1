import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateOrderDto{

   // @IsString()
    @ApiProperty()
    username: string;

    //@IsString()
    @ApiProperty()
    meal: string;

    //@IsNumber()
    @ApiProperty()
    price: number;
}