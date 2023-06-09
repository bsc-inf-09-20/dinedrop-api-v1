import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customer/Entity/customer.entity';
import { CustomerService } from 'src/customer/customer.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @Inject('CUSTOMER_SERVICE') private readonly customerService: CustomerService,
    ){}

    async validateCustomer(username: string){ 
        console.log('Inside validateCustomer');
        const customerDB = await this.customerService.findCustomerByUsername(username);
        if (customerDB){
            console.log('Customer validation success');
            return customerDB
        }
        return null;
    }
}
