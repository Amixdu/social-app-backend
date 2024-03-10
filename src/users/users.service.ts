import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { QueryDto } from './dto';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(query: QueryDto): Promise<User | null> {
    return this.usersRepository.findOneBy(query);
  }

  findMany(query: QueryDto): Promise<User[] | []> {
    return this.usersRepository.findBy(query);
  }

  findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  create(body: CreateUserDto): Promise<User> {
    return this.usersRepository.save(body);
  }

  async update(id: number, body: CreateUserDto): Promise<User> {
    await this.usersRepository.update(id, body);
    return this.findOneById(id);
  }

  async delete(id: number) {
    await this.usersRepository.delete(id);
  }
}
