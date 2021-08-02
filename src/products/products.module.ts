import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './products.model';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService, FileService],
})
export class ProductsModule {}
