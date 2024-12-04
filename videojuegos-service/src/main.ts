import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { parse } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir solicitudes desde el frontend
  app.enableCors({
    origin: 'http://localhost:3001', // Dirección del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
