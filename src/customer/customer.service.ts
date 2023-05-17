import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {

    get(){
return {username: 'mary' ,hostel:'flats'};
    }

    create(createCustomerDto:CreateCustomerDto) {
        return createCustomerDto;
    }

    update(updateCustomerDto:UpdateCustomerDto, customerId: number) {
        return {body:updateCustomerDto,customerId};
    }

    getCustomer(customerId: number){
        return {customerId};
    }

    delete(customerId: number){
        return {customerId};
    }
}
