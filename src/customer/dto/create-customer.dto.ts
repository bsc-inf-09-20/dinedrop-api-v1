import { IsString } from "class-validator";
export class CreateCustomerDto {

    @IsString()
    username: string ;
    @IsString()
    hostel: string;
    @IsString()
    roomNumber: string;
    @IsString()
    phoneNumber: string;

}