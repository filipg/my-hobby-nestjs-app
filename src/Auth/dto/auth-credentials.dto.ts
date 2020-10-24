import { IsString, MinLength, MaxLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;


  @IsString()
  @MinLength(5, {message: 'Password is to short (5 characters min)'})
  @MaxLength(20, {message: 'Password is to long (20 characters max)'})
  password: string;
}
