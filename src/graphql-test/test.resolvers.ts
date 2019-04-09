import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { testGuard } from './test.guard';
import { testService } from './test.service';

// const pubSub = new PubSub();

@Resolver('Cat')
export class testResolvers {
  constructor(private readonly catsService: testService) {}

  @Query()
  @UseGuards(testGuard)
  async getCats() {
    return await this.catsService.findAll();
  }
}
