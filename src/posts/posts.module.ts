import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSchema } from './post.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
