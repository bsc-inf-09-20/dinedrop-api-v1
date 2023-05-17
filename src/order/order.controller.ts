import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
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
    store(@Req() req: Request){
        return this.orderService.placeOrder(req);
    }

    @Patch('/:customerId')
    updateOrder(@Req() req: Request, @Param() param: {customerId: number}){
        return this.orderService.updateOrder(req,param);
    }

    @Delete('/:customerId')
    deleteOrder(@Param() param:{customerId: number}){
        return this.orderService.deleteOrder(param);
    }
}
