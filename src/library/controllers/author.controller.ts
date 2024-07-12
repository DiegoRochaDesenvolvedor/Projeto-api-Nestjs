import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { CreateAuthorDto } from '../interfaces/Author.interface';
import { AuthorService } from '../services/author.service';
import { Author } from '../schemas/author.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('author')
export class AuthorController {
  constructor(private readonly AuthorService: AuthorService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<Author[]> {
    return this.AuthorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const Author = await this.AuthorService.findOne(id);
    return Author;
  }

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.AuthorService.create(createAuthorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.AuthorService.update(id, createAuthorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    const Author = await this.AuthorService.delete(id);
    return Author;
  }
}
