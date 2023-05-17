import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Request } from 'express';
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

    @Get()
    getCustomers(){
         return this.customerService.get();
    }

    @Post()
    store(@Req() req: Request){
        return this.customerService.create(req);
    }

    @Patch('/:customerId')
    update(@Req() req: Request, @Param() param: {customerId: number}){
        return this.customerService.update(req,param);
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
