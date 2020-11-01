import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';
import { ProfileService } from './profile.service';
import { Profile } from './profile.model';

@Controller('profile')
export class ProfileController {

  constructor(private profileService: ProfileService) { }

  @Post()
  async addProfileInfo(@Body(ValidationPipe) profileDto: ProfileDto): Promise<void> {
    return await this.profileService.addProfileInfo(profileDto);
  }

  @Get('/:id')
  async getProfileInfo(@Param('id') id: string): Promise<Profile> {
    return await this.profileService.getProfileInfo(id);
  }

  @Patch('/:id')
  async updateProfileInfo(@Param('id') id: string, @Body(ValidationPipe) profileDto: ProfileDto): Promise<Profile> {
    return await this.profileService.updateProfileInfo(id, profileDto);
  }
}
