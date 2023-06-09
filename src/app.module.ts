import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customer/Entity/customer.entity";
import { Orders } from "./order/Entity/order.entity"
import { AuthModule } from './auth/auth.module';
import config from "./ormconfig";

@Module({ 
    controllers:[AppController], 
    imports: [CustomerModule, OrderModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'sql9.freemysqlhosting.net',
            port: 3306,
            username: 'sql9624629',
            password: 'CQ2yfscUIS',
            database: 'sql9624629',
            entities: [Customer,Orders],
            synchronize: true,
          }),
        AuthModule,
        
    ],

})
export class AppModule{}