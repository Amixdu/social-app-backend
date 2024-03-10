import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, QueryDto } from './dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  find(@Query() query: QueryDto) {
    return this.userService.findMany(query);
  }

  @Get(':id')
  findOneById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User | null> {
    const user = this.userService.create(body);
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() body: CreateUserDto,
  ): Promise<User | null> {
    const user = this.userService.update(id, body);
    return user;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<User | null> {
    await this.userService.delete(id);
    return null;
  }
}
