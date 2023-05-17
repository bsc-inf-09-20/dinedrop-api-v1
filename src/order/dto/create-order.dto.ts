import { IsString, IsNumber } from "class-validator";

export class CreateOrderDto{

    @IsString()
    username: string;
    @IsString()
    meal: string;
    @IsNumber()
    price: number;
}