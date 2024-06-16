import { EntitySchema } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseColumnSchema } from '../common/base.schema';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    ...BaseColumnSchema,
    firstName: {
      type: String,
      name: 'first_name',
    },
    lastName: {
      type: String,
      name: 'last_name',
    },
    email: {
      type: String,
    },
  },
  relations: {
    posts: {
      type: 'one-to-many',
      target: 'Post',
      inverseSide: 'createdBy',
      cascade: true,
    },
  },
});
