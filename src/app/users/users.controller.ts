import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create.users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async index() {
    return this.usersService.findAll();
  }
  @Post()
  async store(@Body() body: CreateUserDto) {
    return null;
  }
  @Put(':id')
  async update() {
    return null;
  }
  @Get(':id')
  async exhibit(@Param('id') id: string) {
    return null;
  }
  @Delete(':id')
  async delete() {
    return null;
  }
}
