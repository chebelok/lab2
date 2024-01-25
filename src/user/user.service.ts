import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { users } from '../db/users.db';
import { plainToClass } from 'class-transformer';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor() {
    this.users = users;
  }

  users: User[];

  create(createUserDto: CreateUserDto) {
    const newUser = plainToClass(User, createUserDto);
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: User['id']) {
    const foundUser = this.users.find((user) => user.id === id);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  remove(id: User['id']) {
    const userToDelete = this.users.find((user) => user.id === id);
    if (!userToDelete) {
      throw new NotFoundException('User not found');
    }
    this.users = users.filter((user) => user.id !== id);
    return userToDelete;
  }
}
