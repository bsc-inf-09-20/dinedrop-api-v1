import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';

@Module({ 
    controllers:[AppController], imports: [CustomerModule, OrderModule],

})
export class AppModule{}