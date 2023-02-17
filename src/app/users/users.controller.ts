import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  async index() {
    return null;
  }
  @Post()
  async store() {
    return null;
  }
  @Put(':id')
  async update() {
    return null;
  }
  @Get(':id')
  async exhibit() {}
  @Delete(':id')
  async delete() {}
}
