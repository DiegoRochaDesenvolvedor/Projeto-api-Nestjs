import { BookModule } from './module/book.module';
import { AuthorModule } from './module/author.module';
import { UsersModule } from './module/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './module/authModule';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './AuthMiddleware';
import { RequestMethod } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    BookModule,
    AuthorModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/library'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(AuthMiddleware)
//       .exclude({ path: 'api/auth/refresh', method: RequestMethod.POST })
//       .forRoutes('*'); // Aplica o middleware a todas as rotas
//   }
// }
