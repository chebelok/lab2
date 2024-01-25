import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';
import { v4 } from 'uuid';

export class Record {
  id: string = v4();
  amount: number;
  categoryId: Category['id'];
  userId: User['id'];
  createdAt: Date = new Date();
}
