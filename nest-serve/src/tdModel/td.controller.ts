import { Get, Post, Controller, Param, Body } from '@nestjs/common';
import { TdService } from './td.service';
class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
@Controller('td') //  /test/ 路径
export class TdController {
  constructor(private readonly testService: TdService) {}

  @Get() //   /test/ 路径  firstTest 函数名可以随意起
  firstTest(): string {
    return this.testService.test();
  }

  @Get(':id') //   /test/1  等等路径
  findOneTest(@Param() params): string {
    console.log(params.id);
    return this.testService.findOneTest();
  }
  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }
}
