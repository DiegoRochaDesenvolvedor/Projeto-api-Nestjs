import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from '../library/services/book.service';
import { Book, BookSchema } from '../library/schemas/books.model';
import { LibraryController } from '../library/controllers/book.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [LibraryController],
  providers: [BookService],
})
export class BookModule {}
