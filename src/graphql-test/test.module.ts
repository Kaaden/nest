import { Module } from '@nestjs/common';
import { testResolvers } from './test.resolvers';
import { testService } from './test.service';
import { Contents, ContentsService } from '../Contents';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Contents])],
  providers: [testService, testResolvers, ContentsService],
})
export class testModule {}
