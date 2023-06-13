import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { JwtAuthGuard } from 'src/guards/token';
import { UserRegisterPayload } from 'src/auth/dto/user-register-payload';
import { UserJwt } from 'src/auth/dto/user-jwt';
import { UserLoginPayload } from 'src/auth/dto/user-login-payload';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() userRegisterDto: UserRegisterPayload) {
    if (userRegisterDto.password !== userRegisterDto.comparedPassword) {
      throw new BadRequestException([
        'password and comparedPassword should be the same',
      ]);
    }

    const user = await this.authService.register(userRegisterDto);

    const userJwt = {
      id: user.id,
    } as UserJwt;

    const token = this.authService.generateJwt(userJwt);

    return {
      username: user.username,
      token: token,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() userLoginPayload: UserLoginPayload) {
    if (userLoginPayload.password !== userLoginPayload.comparedPassword) {
      throw new BadRequestException([
        'password and comparedPassword should be the same',
      ]);
    }

    const user = await this.authService.login(userLoginPayload);

    const userJwt = {
      id: user.id,
    } as UserJwt;

    const token = this.authService.generateJwt(userJwt);

    return {
      username: user.username,
      token: token,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('isValid')
  testIsTokenValid(): boolean {
    return true;
  }
}
