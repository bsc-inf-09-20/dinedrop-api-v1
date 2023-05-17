import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request } from 'express';
import { UpdateCustomerDto } from './dto/update-customer.dto';
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Get()
    getCustomers(){
         return this.customerService.get();
    }

    @Post()
    store(@Body() body: any){
        return this.customerService.create(body);
    }

    @Patch('/:customerId')
    update(@Body() updateCustomerDto: UpdateCustomerDto, 
    @Param() param: {customerId: number}){
        return this.customerService.update(updateCustomerDto,param);
    }


    @Get('/:customerId')
    getCustomer(@Param() param:{customerId: number}){
        return this.customerService.getCustomer(param);
    }

    @Delete('/:customerId')
    deleteCustomer(@Param() param:{customerId: number}){
        return this.customerService.delete(param);
    }
}
