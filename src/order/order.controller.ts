import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { Request } from 'express';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    getOrders(){
        return this.orderService.getorders();
    }

    @Post()
    storeOrders(@Body() body: any){
        return this.orderService.placeOrder(body);
    }

    @Patch('/:customerId')
    updateOrder(@Body() updateOrderDto: {username: string; meal: string },
     @Param() param: {customerId: number}){
        return this.orderService.updateOrder(updateOrderDto,param);
    }

    @Delete('/:customerId')
    deleteOrder(@Param() param:{customerId: number}){
        return this.orderService.deleteOrder(param);
    }
}
