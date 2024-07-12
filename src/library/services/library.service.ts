import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from '../schemas/books.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Book.name) private itemModel: Model<Book>) {}

  async create(createItemDto: any): Promise<Book> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }
}
