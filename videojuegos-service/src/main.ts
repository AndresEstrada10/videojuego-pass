import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  // Registra el interceptor globalmente
 
  const port = process.env.PORT || 3000;  // Asegúrate de usar la sintaxis correcta
  await app.listen(port);
}

bootstrap();
