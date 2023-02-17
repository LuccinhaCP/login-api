import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
    @InjectRepository(UsersEntity)
 private readonly usersRepository: Repository<UsersEntity>;
} {}
