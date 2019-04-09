import { Injectable } from '@nestjs/common';
import { Cat } from '../graphal.schema';

@Injectable()
export class testService {
  private readonly cats: Cat[] = [{ id: 1, name: 'kaaden', age: 12 }];

  findAll(): Cat[] {
    return this.cats;
  }
}
