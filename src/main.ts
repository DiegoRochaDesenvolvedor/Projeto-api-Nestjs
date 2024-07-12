import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line func-style
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Servidor rodando na porta ${PORT}`);
}

bootstrap().catch(err => {
  console.error('Erro ao iniciar a aplicação:', err);
  process.exit(1);
});

process.on('SIGINT', async () => {
  console.log('Fechando a aplicação...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Fechando a aplicação...');
  process.exit(0);
});
