import { Module } from '@nestjs/common';
import { HobbyController } from './hobby.controller';
import { HobbyService } from './hobby.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HobbySchema } from './hobby.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Hobby', schema: HobbySchema}])
  ],
  controllers: [HobbyController],
  providers: [HobbyService]
})
export class HobbyModule { }
