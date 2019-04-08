import { Module } from '@nestjs/common';
import { TdController } from './td.controller';
import { TdService } from "./td.service";

// 在Module的配置文件里配置对应的  controller  和  service
@Module({
  imports: [],
  controllers: [TdController],
  providers: [TdService],
})
export class TdModule {}
