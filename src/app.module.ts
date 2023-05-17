import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from "@nestjs/typeorm";

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
            entities: [],
            synchronize: true,
          }),
    ],

})
export class AppModule{}