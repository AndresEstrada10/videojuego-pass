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
      host:"mysql-110f9776-videojuegos.g.aivencloud.com",
      port: 18597,
      username: "avnadmin",
      password: "AVNS_YFQgObydTtAzn2YDwvU",
      database: "defaultdb",
      autoLoadEntities: true,
      synchronize: false,
    }),
    VideojuegosModule,
    CarritoModule,
    RegistroModule,
  ],
})
export class AppModule {}
