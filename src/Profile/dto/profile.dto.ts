import { IsString } from 'class-validator';

export class ProfileDto {
  @IsString()
  _id: string;

  @IsString()
  description: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;
}
