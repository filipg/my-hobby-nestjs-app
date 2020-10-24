import { Controller } from '@nestjs/common';
import { AuthService } from './Auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

}
