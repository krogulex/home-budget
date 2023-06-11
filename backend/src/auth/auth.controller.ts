import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/guards/token';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly appService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  register(): string {
    return this.jwtService.sign({
      user: 'test',
    });
  }

  @Post('login')
  login(): string {
    return this.jwtService.sign({
      user: 'test',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  testIsTokenValid(): string {
    return 'Valid token';
  }
}
