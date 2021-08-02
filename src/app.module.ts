import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { Product } from './products/products.model';
import { ProductsModule } from './products/products.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      port: process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Product],
      autoLoadModels: true,
    }),
    UsersModule,
    ProductsModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
