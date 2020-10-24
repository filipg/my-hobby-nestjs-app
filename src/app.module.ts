import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/my-hobby-nestjs-app', {useNewUrlParser: true}),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
