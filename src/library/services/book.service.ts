import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../schemas/books.model'; // Ajuste o caminho de importação conforme necessário
import { CreateBookDto } from '../interfaces/book.interface';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async update(id: string, createBookDto: CreateBookDto): Promise<Book> {
    try {
      const updatedBook = await this.bookModel.findByIdAndUpdate(id, createBookDto, { new: true });
      return updatedBook;
    } catch {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }

  async delete(id: string): Promise<string> {
    try {
      await this.bookModel.findByIdAndDelete(id);
      return `Livro com ID ${id} deletado com sucesso.`;
    } catch {
      throw new Error(`Livro com ID ${id} não encontrado.`);
    }
  }

  async findOne(id: string) {
    return this.bookModel.findById(id);
  }

  async create(createBookDto: any): Promise<Book> {
    try {
      const createdBook = new this.bookModel(createBookDto);
      return createdBook.save();
    } catch {
      throw new Error('Nao foi possivel salvar os dados!');
    }
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
