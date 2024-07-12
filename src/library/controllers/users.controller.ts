import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateUsersDto } from '../interfaces/users.interface';
import { UsersService } from '../services/users.service';
import { Users } from '../schemas/users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto): Promise<Users> {
    return this.usersService.create(createUsersDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createUsersDto: CreateUsersDto): Promise<Users> {
    return this.usersService.update(id, createUsersDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.usersService.delete(id);
  }
}