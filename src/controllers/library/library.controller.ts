import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

@Controller('library')
export class LibraryController {
  @Get()
  findAll(): string {
    return 'Retorna todos os itens';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Retorna o item com ID ${id}`;
  }

  @Post()
  create(@Body() createItemDto: any): string {
    return 'Cria um novo item';
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
