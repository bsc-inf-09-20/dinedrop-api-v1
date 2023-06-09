import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService,)
    {
        super();
    }

async validate(username: string,){
    console.log('Inside LocalStratey.validate');
    console.log(username);
    const customer = await this.authService.validateCustomer(username);
    if (!customer){
        throw new UnauthorizedException();
    }
}
}