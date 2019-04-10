import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
// import { testGuard } from './test.guard';
// import { testService } from './test.service';
// import { Cat } from '../graphal.schema';
import { Contents, ContentsService } from '../Contents';
// import { ArgsType, Field, Int } from 'type-graphql';
// import { Min } from 'class-validator';

@Resolver('Cat')
export class testResolvers {
  constructor(
    // private readonly catsService: testService,
    private readonly photoService: ContentsService,
  ) {}

  // @Query()
  // @UseGuards(testGuard)
  // async getCats() {
  //   return await this.catsService.findAll();
  // }
  // @Query('cat')
  // async findOneById(
  //   @Args('id', ParseIntPipe)
  //   id: number,
  // ): Promise<Cat> {
  //   console.log(id);
  //   return await this.catsService.findOneById(id);
  // }
  @Query('getOne')
  async getOne(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Contents> {
    return await this.photoService.findOne(id);
  }
}
