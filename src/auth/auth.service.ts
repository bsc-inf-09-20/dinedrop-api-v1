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
        const customerDB = await this.customerService.findCustomerByUsername(username);
        if (customerDB){
            console.log(customerDB);
        }
    }
}
