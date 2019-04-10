import { Module } from '@nestjs/common';
import { testResolvers } from './test.resolvers';
// import { testService } from './test.service';
import { Contents, ContentsService } from '../Contents';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScalarsModule } from '../scalars';
@Module({
  imports: [TypeOrmModule.forFeature([Contents]), ScalarsModule],
  providers: [testResolvers, ContentsService],
})
export class testModule { }
