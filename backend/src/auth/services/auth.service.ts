import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRegisterPayload } from 'src/auth/dto/user-register-payload';
import { UserService } from 'src/auth/services/user.service';
import { User } from 'src/auth/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserJwt } from 'src/auth/dto/user-jwt';
import { UserLoginPayload } from 'src/auth/dto/user-login-payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  generateSalt(): Promise<string> {
    return bcrypt.genSalt();
  }

  async compareHashAndPassword(
    password: string,
    hashedPassword: string,
    salt: string,
  ): Promise<boolean> {
    const givenPasswordHashed = await this.hashPassword(password, salt);

    return givenPasswordHashed === hashedPassword;
  }

  hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  generateJwt(userJwt: UserJwt) {
    return this.jwtService.sign(userJwt);
  }

  async login(userLoginPayload: UserLoginPayload): Promise<User> {
    const user = await this.userService.getUserByUsernameForLogin(
      userLoginPayload.username,
    );

    if (
      await this.compareHashAndPassword(
        userLoginPayload.password,
        user.password,
        user.salt,
      )
    ) {
      return user;
    } else {
      throw new UnauthorizedException(['wrong credentials']);
    }
  }

  async register(userRegisterDto: UserRegisterPayload): Promise<User> {
    const salt = await this.generateSalt();
    const passwordHash = await this.hashPassword(
      userRegisterDto.password,
      salt,
    );

    const user = new User(
      userRegisterDto.username,
      userRegisterDto.email,
      passwordHash,
      salt,
    );

    return this.userService.createUser(user);
  }
}
