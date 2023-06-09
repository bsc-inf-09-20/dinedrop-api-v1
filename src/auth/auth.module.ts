import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomerModule } from 'src/customer/customer.module';
import { AuthController } from './auth.controller';
import { CustomerService } from 'src/customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/customer/Entity/customer.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
  imports: [CustomerModule,TypeOrmModule.forFeature([Customer]), PassportModule],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'CUSTOMER_SERVICE',
      useClass: CustomerService,
    },
    LocalStrategy,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
