import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from 'src/file/file.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productModule: typeof Product,
    private fileService: FileService,
  ) {}

  async create(dto: CreateProductDto, image): Promise<Product> {
    const imagePath = this.fileService.createFile('image', image);
    const product = await this.productModule.create({
      ...dto,
      image: imagePath,
    });
    return product;
  }
  async getAll(): Promise<Product[]> {
    return await this.productModule.findAll({ include: { all: true } });
  }

  async getOne(id: number): Promise<Product> {
    const product = this.productModule.findByPk(id);
    return product;
  }

  async delete(id: number): Promise<void> {
    const product = await this.productModule.findByPk(id);
    await product.destroy();
  }
}
