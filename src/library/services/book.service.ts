import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../schemas/books.model'; // Ajuste o caminho de importação conforme necessário

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: any): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }
}