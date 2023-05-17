import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
    getorders(){
        return {username:"mary", order: "chips"};
    }

    placeOrder(body:any){
        return body;
    }

    updateOrder(updateOrderDto: UpdateOrderDto, param:{customerId: number}) {
        return {body: updateOrderDto,param};
    }

    deleteOrder(param:{customerId: number}) {
        return param;
    }
}

