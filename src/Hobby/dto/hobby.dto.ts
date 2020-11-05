import { IsString } from 'class-validator';

export class HobbyDto {

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  icon: string;

  users: string[];
  events: any;
}
