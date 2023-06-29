import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

const postgresConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    // @ts-ignore
    type: process.env.DB_TYPE,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    extra: { charset: 'utf8mb4_unicode_ci' },
    entities: [User],
    synchronize: true,
  }),
};
export default postgresConfig;
