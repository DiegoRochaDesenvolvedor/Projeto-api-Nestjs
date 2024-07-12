import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateBookDto } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';
import { Book } from '../schemas/books.model';
@Controller('book')
export class LibraryController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.bookService.findOne(id);
    return book;
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.update(id, createBookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    const book = await this.bookService.delete(id);
    return book;
  }
}
