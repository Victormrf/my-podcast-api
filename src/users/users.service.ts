import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

// Prepared MOCK data
const users: User[] = [
  {
    userId: 1,
    username: 'Pablo Vegetti',
    password: '123abc',
  },
  {
    userId: 2,
    username: 'Leo Jardim',
    password: '123cba',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
