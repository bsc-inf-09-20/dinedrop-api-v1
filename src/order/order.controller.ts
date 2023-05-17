import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { Request } from 'express';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    getOrders(){
        return this.orderService.getorders();
    }

    @Post()
    storeOrders(@Body() createOrderDto: CreateOrderDto){
        return this.orderService.placeOrder(createOrderDto);
    }

    @Patch('/:customerId')
    updateOrder(@Body() updateOrderDto: UpdateOrderDto,
     @Param('customerId',ParseIntPipe) customerId: number){
        return this.orderService.updateOrder(updateOrderDto,customerId);
    }

    @Delete('/:customerId')
    deleteOrder(@Param('customerId',ParseIntPipe) customerId: number){
        return this.orderService.deleteOrder(customerId);
    }
}
