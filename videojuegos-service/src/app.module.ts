import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { CarritoModule } from './carrito/carrito.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables estén disponibles globalmente
    }),
    TypeOrmModule.forRoot({
     type: 'mysql',
      host: process.env.DB_HOST,          // Host de la base de datos
      port: parseInt(process.env.DB_PORT), // Puerto de la base de datos
      username: process.env.DB_USERNAME,   // Usuario de la base de datos
      password: process.env.DB_PASSWORD,   // Contraseña de la base de datos
      database: process.env.DB_NAME,       // Nombre de la base de datos
      autoLoadEntities: true,
      synchronize: true,
    }),
    VideojuegosModule,
    CarritoModule,
    RegistroModule,
  ],
})
export class AppModule {}
