import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IProductCreationAttrs {
  title: string;
  description: string;
  price: number;
  weight: number;
  image: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, IProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  weight: number;

  @Column({
    type: DataType.STRING,
  })
  image: string;
}
