import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './event.schema';
import { HobbyModule } from '../Hobby/hobby.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Event', schema: EventSchema}]),
    HobbyModule
  ],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule { }
