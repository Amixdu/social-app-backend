import { EntitySchema } from 'typeorm';
import { User } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
      name: 'firstname',
    },
    lastName: {
      type: String,
      name: 'lastname',
    },
    email: {
      type: String,
    },
  },
});
