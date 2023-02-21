import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.users.dto';
import { UpdateUserDto } from './dto/update.users.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  
  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'name', 'email'],
    });
  }
  async findOne(id:string) {
    return await this.usersRepository.findOneBy ({ id })
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOneBy ({ email })
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy ({id})
    this.usersRepository.merge(user,data);
    return await this.usersRepository.save(user)
  }
  
  async store(data:CreateUserDto) {
    const user = await this.usersRepository.create (data);
    return await this.usersRepository.save(user);
  }

  async remove(id:string) {
    const user = await this.usersRepository.findBy ({ id });
    this.usersRepository.softDelete({ id })
  }
}
