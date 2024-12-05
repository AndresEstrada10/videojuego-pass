import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend en Render
  app.enableCors({
    origin: 'https://videojuego-backend.onrender.com', // Cambia esto por la URL de tu frontend
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(4000); // Asegúrate de que el backend escucha en el puerto correcto
}

bootstrap();
