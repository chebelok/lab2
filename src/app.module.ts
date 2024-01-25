import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [HealthcheckModule, UserModule, CategoryModule, RecordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
