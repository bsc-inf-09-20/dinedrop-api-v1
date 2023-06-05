import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userInfo } from 'os';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class AuthService {

    constructor(private customerService: CustomerService) {}

  async signIn(id: number, pass: string): Promise<any> {
    const user = await this.customerService.getCustomer(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
