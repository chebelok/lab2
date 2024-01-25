import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';
import { records } from '../db/records.db';
import { plainToClass } from 'class-transformer';

@Injectable()
export class RecordService {
  constructor() {
    this.records = records;
  }

  records: Record[];

  create(createRecordDto: CreateRecordDto) {
    const newRecord = plainToClass(Record, createRecordDto);
    this.records.push(newRecord);
    return newRecord;
  }

  findAll(filter) {
    if (!filter.categoryId && !filter.userId) {
      throw new BadRequestException('Enter categoryId or userId');
    }
    return this.records.filter((record) => {
      if (filter.categoryId && record.categoryId !== filter.categoryId) {
        return false;
      }
      if (filter.userId && record.userId !== filter.userId) {
        return false;
      }
      return true;
    });
  }

  findOne(id: Record['id']) {
    const foundRecord = this.records.find((record) => record.id === id);
    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }
    return foundRecord;
  }

  remove(id: Record['id']) {
    const recordToDelete = this.records.find((record) => record.id === id);
    if (!recordToDelete) {
      throw new NotFoundException('Record not found');
    }
    this.records = records.filter((record) => record.id !== id);
    return recordToDelete;
  }
}
