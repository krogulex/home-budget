import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import backend from 'config/backend';
import postgresConfig from 'config/postgres';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/guards/token';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../.backend.env', '../.db.env'],
      load: [backend],
    }),
    TypeOrmModule.forRootAsync(postgresConfig),
    AuthModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
