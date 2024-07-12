import { Module } from '@nestjs/common';
import { BookModule } from './module/book.module';
import { AuthorModule } from './module/author.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule, AuthorModule, MongooseModule.forRoot('mongodb://localhost:27017/library')],
  controllers: [],
  providers: [],
})
export class AppModule {}
