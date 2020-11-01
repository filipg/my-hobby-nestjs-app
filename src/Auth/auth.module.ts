import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt-auth.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    PassportModule,
    JwtModule.register({
      secret: 'dozmiany',
      signOptions: { expiresIn: '7d' }
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule { }
