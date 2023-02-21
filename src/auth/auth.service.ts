import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { UsersService } from 'src/app/users/users.service';

@Injectable()

export class AuthService {
    constructor(private readonly userService: UsersService) {}
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
