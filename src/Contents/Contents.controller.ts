import { Controller, Get, Body, Post } from '@nestjs/common';
import { ContentsService } from './Contents.service';
import { Contents } from './Contents.entity';
class CreateCatDto {
  readonly id: number;
}
@Controller('Contents')
export class ContentsController {
  constructor(private readonly photoService: ContentsService) {}

  @Get()
  findAll(): Promise<Contents[]> {
    return this.photoService.findAll();
  }

  @Post('findOne')
  findByOne(@Body() createCatDto: CreateCatDto): Promise<Contents> {
    console.log(createCatDto);
    let id = Number(createCatDto.id);
    return this.photoService.findOne(id);
  }
}
