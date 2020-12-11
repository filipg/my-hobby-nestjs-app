import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Hobby } from './hobby.model';
import { HobbyDto } from './dto/hobby.dto';

@Injectable()
export class HobbyService {

  constructor(@InjectModel('Hobby') private hobbyModel: Model<Hobby>) { }

  async addHobby(hobbyDto: HobbyDto): Promise<Hobby> {
    const {name, description, icon, users, events} = hobbyDto;

    const newHobby = new this.hobbyModel({name, description, icon, users, events});

    try {
      return await newHobby.save();
    } catch (e) {
      throw e;
    }
  }

  async getHobbies(): Promise<Hobby[]> {
    let hobbies;

    try {
      hobbies = await this.hobbyModel.find().exec();
    } catch (e) {
      throw new NotFoundException();
    }

    if (!hobbies) {
      throw new NotFoundException();
    }

    return hobbies;
  }


  async getHobby(id: string): Promise<Hobby> {
    let hobby;

    try {
      hobby = await this.hobbyModel.findById(id).exec();
    } catch (e) {
      throw new NotFoundException();
    }

    if (!hobby) {
      throw new NotFoundException();
    }

    return hobby;
  }

  async updateHobby(id: string, hobbyDto: HobbyDto): Promise<Hobby> {
    const {name, description, icon, users, events} = hobbyDto;

    let hobby = await this.getHobby(id);

    hobby.name = name;
    hobby.description = description;
    hobby.icon = icon;
    hobby.users = users;
    hobby.events = events;

    await hobby.save();

    return hobby;
  }

  async addEvent(hobbyId: string, eventId: string): Promise<Hobby> {
    let hobby = await this.getHobby(hobbyId);

    hobby.events = [...hobby.events, eventId];

    await hobby.save();

    return hobby;
  }
}
