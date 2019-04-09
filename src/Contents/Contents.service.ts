import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contents } from './Contents.entity';

@Injectable()
export class ContentsService {
  constructor(
    @InjectRepository(Contents)
    private readonly photoRepository: Repository<Contents>,
  ) {}

  async findAll(): Promise<Contents[]> {
    return await this.photoRepository.find();
  }
  async findOne(id: number): Promise<Contents> {
    return await this.photoRepository.findOne(id);
  }
}
