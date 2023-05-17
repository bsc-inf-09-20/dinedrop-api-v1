import { IsString } from "class-validator";

export class UpdateOrderDto {

    @IsString()
    username: string;

    @IsString()
     meal: string;
     }