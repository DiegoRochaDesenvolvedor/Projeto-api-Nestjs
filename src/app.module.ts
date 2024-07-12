import { Module } from '@nestjs/common';
import { BookModule } from './module/book.module';
import { AuthorModule } from './module/author.module';
import { UsersModule } from './module/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/library'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
