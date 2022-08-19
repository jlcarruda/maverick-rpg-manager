import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';

@Module({
  imports: [TerminusModule, ConfigModule.forRoot()],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
