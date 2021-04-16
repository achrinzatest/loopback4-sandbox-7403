import {Entity, model, property} from '@loopback/repository';

@model()
export class TestModel extends Entity {
  @property({
    id: true
  })
  id: number;
}
