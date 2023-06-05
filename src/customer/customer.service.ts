import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './Entity/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>
    ){}

    get():Promise<Customer []>{
return this.customerRepository.find();
    }

    create(createCustomerDto:CreateCustomerDto) {
        return this.customerRepository.save(createCustomerDto);
    }

    update(updateCustomerDto:UpdateCustomerDto, customerId: number) {
        return this.customerRepository.update(customerId,updateCustomerDto);
    }

    getCustomer(id: number){
        return this.customerRepository.findOne({where: {id} });
    }

    delete(customerId: number){
        return this.customerRepository.delete(customerId);
    }

} 
