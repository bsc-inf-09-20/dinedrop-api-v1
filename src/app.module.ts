import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customer/Entity/customer.entity";
import { Orders } from "./order/Entity/order.entity"

@Module({ 
    controllers:[AppController], 
    imports: [CustomerModule, OrderModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'dinedrop',
            entities: [Customer,Orders],
            synchronize: true,
          }),
        
    ],

})
export class AppModule{}