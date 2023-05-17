import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CustomerService {

    get(){
return {username: 'mary' ,hostel:'flats'};
    }

    create(req: Request) {
        return req.body;
    }

    update(req: Request, param:{customerId: number}) {
        return {body: req.body,param};
    }

    getCustomer(param: {customerId: number}){
        return param;
    }

    delete(param: {customerId: number}){
        return param;
    }
}
