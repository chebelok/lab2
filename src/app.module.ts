import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HealthcheckModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
