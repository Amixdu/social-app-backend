/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { FindUsersQueryDto } from './dto';
import CreateUserBody from './dto/users-body.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(query: FindUsersQueryDto): Promise<User | null> {
    return this.usersRepository.findOneBy(query);
  }

  findMany(query: FindUsersQueryDto): Promise<User[] | []> {
    console.log('hello', process.env.DATABASE_USERNAME);
    return this.usersRepository.findBy(query);
  }

  findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  create(body: CreateUserBody) {
    return this.usersRepository.save(body);
  }

  async update(id: number, body: CreateUserBody) {
    await this.usersRepository.update(id, body);
    return this.findOneById(id);
  }
}
