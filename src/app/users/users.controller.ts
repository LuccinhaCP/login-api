import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
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
    return this.usersService.store(body);
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
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.usersService.remove(id);
  }
}
