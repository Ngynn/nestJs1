import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

@Injectable()
export class UserService {
  users: User[] = [];
  create(createUserDto: User) {
    createUserDto.id = this.users.length + 1;
    createUserDto.created_at = new Date();
    createUserDto.updated_at = new Date();
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: User) {
    const user = this.users.find((user) => user.id === id);
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.updated_at = new Date();
    return user;
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }
}
