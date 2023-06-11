import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.backend.env',
      load: [config],
    }),
  ],
})
export class AppModule {}
