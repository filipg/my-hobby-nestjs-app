import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventService } from './event.service';
import { Event } from './event.model';

@Controller('event')
export class EventController {

  constructor(private eventService: EventService) { }

  @Post()
  async addEvent(@Body() eventDto: EventDto): Promise<Event> {
    return await this.eventService.addEvent(eventDto);
  }
}
