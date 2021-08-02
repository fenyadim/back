import { Body, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 3 }]))
  create(@UploadedFiles() files, @Body() dto: CreateProductDto) {
    const { image } = files;
    return this.productService.create(dto, image[0]);
  }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
