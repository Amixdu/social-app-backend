import { EntitySchema } from 'typeorm';
import { Post } from './entities/post.entity';
import { BaseColumnSchema } from '../common/base.schema';

export const PostSchema = new EntitySchema<Post>({
  name: 'Post',
  target: Post,
  columns: {
    ...BaseColumnSchema,
    caption: {
      type: String,
      length: 512,
    },
    hashtags: {
      type: String,
      array: true,
    },
  },
  relations: {
    createdBy: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'posts',
      joinColumn: { name: 'created_by' },
      eager: true,
    },
  },
});
