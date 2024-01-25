import { v4 } from 'uuid';

export class User {
  id: string = v4();
  name: string;
}
