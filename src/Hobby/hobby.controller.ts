import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { HobbyDto } from './dto/hobby.dto';
import { Hobby } from './hobby.model';
import { HobbyService } from './hobby.service';

@Controller('hobby')
export class HobbyController {

  constructor(private hobbyService: HobbyService) { }

  @Post()
  async addHobby(@Body() hobbyDto: HobbyDto): Promise<Hobby> {
    return await this.hobbyService.addHobby(hobbyDto);
  }

  @Get()
  async getHobbies(): Promise<Hobby[]> {
    return await this.hobbyService.getHobbies();
  }

  @Get('/:id')
  async getHobbyById(@Param('id') id: string): Promise<Hobby> {
    return await this.hobbyService.getHobby(id);
  }

  @Patch('/:id')
  async updateHobby(@Param('id') id: string, @Body() hobbyDto: HobbyDto): Promise<Hobby> {
    return await this.hobbyService.updateHobby(id, hobbyDto);
  }

  @Patch('/event/:id')
  async addEvent(@Param('id') id: string, @Body() event: any): Promise<Hobby> {
    return await this.hobbyService.addEvent(id, event);
  }
}
