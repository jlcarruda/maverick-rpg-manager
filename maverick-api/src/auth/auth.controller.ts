import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as Req } from 'express';
import { LocalAuthGuard } from 'src/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: Req) {
    return req.user;
  }
}
