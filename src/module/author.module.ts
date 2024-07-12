import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorService } from '../library/services/author.service';
import { Author, AuthorSchema } from '../library/schemas/author.model';
import { AuthorController } from '../library/controllers/author.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
