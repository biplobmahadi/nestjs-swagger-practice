import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
    return cat;
  }

  findOne(id: number) {
    return this.cats[id];
  }
}
