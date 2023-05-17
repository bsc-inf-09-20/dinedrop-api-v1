import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class OrderService {
    getorders(){
        return {username:"mary", order: "chips"};
    }

    placeOrder(req: Request){
        return req.body;
    }

    updateOrder(req: Request, param:{customerId: number}) {
        return {body: req.body,param};
    }

    deleteOrder(param:{customerId: number}) {
        return param;
    }
}

