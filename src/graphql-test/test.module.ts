import { Module } from '@nestjs/common';
import { testResolvers } from './test.resolvers';
import { testService } from './test.service';

@Module({
  providers: [testService, testResolvers],
})
export class testModule {}
