import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService){}

  //POST /login
 // @Post('login')
  //login(): any {
    //  return {}
  //}

    @Get()
    getCustomers(){
         return this.customerService.get();
    }

    @Post()
    store(@Body() createCustomerDto: CreateCustomerDto){
        return this.customerService.create(createCustomerDto);
    }

    @Patch('/:customerId')
    update(@Body() updateCustomerDto: UpdateCustomerDto, 
    @Param('customerId', ParseIntPipe) customerId: number){
        return this.customerService.update(updateCustomerDto,customerId);
    }


    @Get('/:customerId')
    getCustomer(@Param('customerId',ParseIntPipe) customerId:number){
        return this.customerService.getCustomer(customerId);
    }

    @Delete('/:customerId')
    deleteCustomer(@Param('customerId',ParseIntPipe) customerId: number){
        return this.customerService.delete(customerId);
    }
}
