import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('refresh')
  async refresh(@Body() body: { userId: string }): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.refreshToken(body.userId);
    return { accessToken };
  }
}
