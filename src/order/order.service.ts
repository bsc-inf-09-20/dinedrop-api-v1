import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    getorders(){
        return {username:"mary", order: "chips"};
    }

    placeOrder(createOrderDto:CreateOrderDto){
        return createOrderDto;
    }

    updateOrder(updateOrderDto: UpdateOrderDto, customerId: number) {
        return {body: updateOrderDto,customerId};
    }

    deleteOrder(customerId: number) {
        return {customerId};
    }
}

