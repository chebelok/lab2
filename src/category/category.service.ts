import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
import { categories } from '../db/categories.db';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CategoryService {
  constructor() {
    this.categories = categories;
  }

  categories: Category[];

  create(createCategoryDto: CreateCategoryDto) {
    const newCategory = plainToClass(Category, createCategoryDto);
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: Category['id']) {
    const foundCategories = this.categories.find((user) => user.id === id);
    if (!foundCategories) {
      throw new Error('Category not found');
    }
    return foundCategories;
  }

  remove(id: Category['id']) {
    const categoryToDelete = this.categories.find(
      (category) => category.id === id,
    );
    if (!categoryToDelete) {
      throw new Error('User not found');
    }
    this.categories = categories.filter((category) => category.id !== id);
    return categoryToDelete;
  }
}
