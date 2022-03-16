import { EntityRepository } from 'typeorm';
import { TestEntity } from '@entities/test.entity';
import { Test } from '@interfaces/test.interface';

@EntityRepository()
export default class TestRepository {
  public async testFindAll(): Promise<Test[]> {
    const tests: Test[] = await TestEntity.find();

    return tests;
  }
}
