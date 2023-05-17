import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CustomerService {

    get(){
return {username: 'mary' ,hostel:'flats'};
    }

    create(body: any) {
        return body;
    }

    update(updateCustomerDto:{username: string; hostel: string }, param:{customerId: number}) {
        return {body:updateCustomerDto,param};
    }

    getCustomer(param: {customerId: number}){
        return param;
    }

    delete(param: {customerId: number}){
        return param;
    }
}
