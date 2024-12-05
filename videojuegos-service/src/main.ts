import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend
  app.enableCors({
    origin: [process.env.CORS_ORIGIN, process.env.CORS_LOCAL_ORIGIN],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  // Registra el interceptor globalmente
 
  await app.listen(1000); // Asegúrate de que el backend escucha en el puerto correcto
}

bootstrap();
