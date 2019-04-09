import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee';
import { ConfigModule } from './config';

@Module({
  imports: [ConfigModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
