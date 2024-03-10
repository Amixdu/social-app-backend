/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserBody, FindUsersQueryDto } from './dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  find(@Query() query: FindUsersQueryDto) {
    return this.userService.findMany(query);
  }

  @Get(':id')
  findOneById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const user = this.userService.create(body);
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: CreateUserBody) {
    const user = this.userService.update(id, body);
    return user;
  }
}
