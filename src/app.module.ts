import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdModule } from './tdModel/td.module'; //引入文件
@Module({
  imports: [TdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
