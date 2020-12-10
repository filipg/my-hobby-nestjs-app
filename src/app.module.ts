import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './Profile/profile.module';
import { HobbyModule } from './Hobby/hobby.module';
import { EventModule } from './Event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/my-hobby-nestjs-app', {useNewUrlParser: true}),
    AuthModule,
    ProfileModule,
    HobbyModule,
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
