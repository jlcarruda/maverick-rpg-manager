import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'maverick_dev',
      password: '1234',
      database: 'db_maverick_dev',
      synchronize: true,
      logging: 'all',
      entities: [User],
    }),
  ],
})
export class DatabaseModule {}
