import { IsString } from "class-validator";

export class UpdateCustomerDto {
    @IsString()
    username: string;

    @IsString()
     hostel: string; 
    }