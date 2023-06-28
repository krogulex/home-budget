import { IsAlphanumeric, IsString, Length } from 'class-validator';

export class UserRegisterPayload {
  @IsString()
  @Length(5, 20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  @Length(5, 50)
  email: string;

  @IsString()
  password: string;

  @IsString()
  comparedPassword: string;
}
