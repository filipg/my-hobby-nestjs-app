import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService
  ) { }

  async signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ username, password: hashedPassword })

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }

  async signin(user: User) {
    const payload = { username: user.username, sub: user._id};
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({username});

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
}
