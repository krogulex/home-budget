import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface AuthJwtPayload extends JwtPayload {
  id: number;
  username: string;
}

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtSecret'),
    });
  }

  async validate(authJwtPayload: AuthJwtPayload) {
    return authJwtPayload;
  }
}

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

export { JwtStrategy, JwtAuthGuard };
