import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUserByUsernameForLogin(username: string) {
    try {
      return await this.userRepository.findOne({
        where: { username },
        select: ['id', 'username', 'password', 'salt'],
      });
    } catch (error) {
      throw error;
    }
  }

  async getUserByUsernameOrEmail(username: string, email: string) {
    try {
      return await this.userRepository
        .createQueryBuilder('user')
        .where('user.username = :username', { username })
        .orWhere('user.email = :email', { email })
        .getOne();
    } catch (error) {
      throw error;
    }
  }

  async createUser(user: User) {
    if (await this.getUserByUsernameOrEmail(user.username, user.email))
      throw new ConflictException(['Duplicated user']);

    return this.userRepository.save(user);
  }
}
