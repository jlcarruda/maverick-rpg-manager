import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [TerminusModule, ConfigModule.forRoot(), AuthModule, UsersModule],
  controllers: [AppController, HealthController, AuthController],
  providers: [AppService, UsersService],
})
export class AppModule {}
