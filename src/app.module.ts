import { Module } from '@nestjs/common';
import { LibraryController } from './library/controllers/library.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [LibraryController],
  providers: [AppService],
})
export class AppModule {}
