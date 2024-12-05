import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend
  app.enableCors({
    origin: [
      'http://localhost:3001', // Permite acceso desde el frontend local
      'https://videojuego-pass.onrender.com', // Cambia esto por la URL de tu frontend en Render
    ],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(4000); // Asegúrate de que el backend escucha en el puerto correcto
}

bootstrap();
