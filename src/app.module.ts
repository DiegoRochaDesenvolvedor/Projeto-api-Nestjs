import { Module } from '@nestjs/common';
import { BookModule } from './module/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule, MongooseModule.forRoot('mongodb://localhost:27017/library')],
  controllers: [],
  providers: [],
})
export class AppModule {}
