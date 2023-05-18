import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './Entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {

constructor(
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>,
){} 

    getorders():Promise<Orders []>{
        return this.orderRepository.find();
    }

    placeOrder(createOrderDto:CreateOrderDto){
        return this.orderRepository.save(createOrderDto);
    }

    updateOrder(updateOrderDto: UpdateOrderDto, customerId: number) {
        return this.orderRepository.update(customerId,updateOrderDto);
    }

    deleteOrder(customerId: number) {
        return this.orderRepository.delete(customerId);
    }
}

