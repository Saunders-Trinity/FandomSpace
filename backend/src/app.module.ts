import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
// … any other imports …

@Module({
  imports: [ /* e.g. AuthModule, UsersModule… */ ],
  controllers: [HealthController /*, …other controllers */],
  providers: [ /* e.g. PrismaService, … */ ],
})
export class AppModule {}
