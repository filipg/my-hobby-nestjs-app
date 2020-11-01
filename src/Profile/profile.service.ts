import { Injectable, NotFoundException } from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';
import { Profile } from './profile.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class ProfileService {

  constructor(@InjectModel('Profile') private profileModel: Model<Profile>) { }

  async addProfileInfo(profileDto: ProfileDto): Promise<void> {
    const {_id, description, phone, email} = profileDto;

    const profileInfo = new this.profileModel({_id, description, phone, email});

    try {
      await profileInfo.save();
    } catch (error) {
      throw error;
    }
  }

  async getProfileInfo(profileId: string): Promise<Profile> {
    let profile;
    try {
      profile = await this.profileModel.findById(profileId).exec();
    } catch (error) {
      throw new NotFoundException();
    }

    if (!profile) {
      throw new NotFoundException();
    }

    return profile;
  }

  async updateProfileInfo(profileId: string, profileDto: ProfileDto): Promise<Profile> {
    const {_id, description, phone, email} = profileDto;

    let profile = await this.getProfileInfo(profileId);

    profile.description = description;
    profile.phone = phone;
    profile.email = email;

    await profile.save();

    return profile;
  }
}
