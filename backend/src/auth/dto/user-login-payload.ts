import { IsAlphanumeric, IsString, Length } from 'class-validator';

export class UserLoginPayload {
  @IsString()
  @Length(5, 20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  password: string;

  @IsString()
  comparedPassword: string;
}
