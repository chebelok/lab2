import { v4 } from 'uuid';

export class Category {
  id: string = v4();
  name: string;
}
