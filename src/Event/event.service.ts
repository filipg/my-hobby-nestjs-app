import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Event } from './event.model';
import { EventDto } from './dto/event.dto';
import { HobbyService } from '../Hobby/hobby.service';

@Injectable()
export class EventService {

  constructor(
    @InjectModel('Event') private eventModel: Model<Event>,
    private hobbyService: HobbyService
  ) { }

  async addEvent(eventDto: EventDto): Promise<Event> {
    const {name, description, userCreator, time, date, location, hobbyId, participants} = eventDto;

    const newEvent = new this.eventModel({name, description, userCreator, time, date, location, hobbyId, participants});

    await this.hobbyService.addEvent(hobbyId, newEvent._id);

    try {
      return await newEvent.save();
    } catch (e) {
      throw e;
    }
  }

  async getEvent(eventId: string): Promise<Event> {
    let event;
    try {
      event = await this.eventModel.findById(eventId).exec();
    } catch (e) {
      throw new NotFoundException();
    }

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }
}
