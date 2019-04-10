import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentsService } from './Contents.service';
import { ContentsController } from './Contents.controller';
import { Contents } from './Contents.entity';
// import { ScalarsModule } from '../scalars';
@Module({
  imports: [TypeOrmModule.forFeature([Contents])],
  providers: [ContentsService],
  controllers: [ContentsController],
})
export class ContentsModule {}
