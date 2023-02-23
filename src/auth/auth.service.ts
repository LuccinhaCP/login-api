import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { UsersService } from 'src/app/users/users.service';

@Injectable()

export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
      ) {}
    
      async login(user) {
        const payload = { sub: user.id, email: user.email };
    
        return {
          token: this.jwtService.sign(payload),
        };
      }    
    async validateUser(email:string, password: string) {
        let user;
        try {
            user = await this.userService.findByEmail(email);
        } catch (err) {
            return null;
        }
        const isPWValid = compareSync(password, user.password);
        if (!isPWValid) return null;
        return user;
    }
}
