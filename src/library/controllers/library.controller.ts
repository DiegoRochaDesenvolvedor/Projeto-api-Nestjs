import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateBookDto } from '../interfaces/book.interface';
import { BookService } from '../services/book.service';
import { Book } from '../schemas/books.model';
@Controller('library')
export class LibraryController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  findAll(): string {
    return 'Retorna todos os itens';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Retorna o item com ID ${id}`;
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: any): string {
    return `Atualiza o item com ID ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Deleta o item com ID ${id}`;
  }
}
