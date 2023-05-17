import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class OrderService {
    getorders(){
        return {username:"mary", order: "chips"};
    }

    placeOrder(body:any){
        return body;
    }

    updateOrder(updateOrderDto: {username: string; meal: string }, param:{customerId: number}) {
        return {body: updateOrderDto,param};
    }

    deleteOrder(param:{customerId: number}) {
        return param;
    }
}

