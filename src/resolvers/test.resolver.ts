import { Authorized, Query, Resolver } from 'type-graphql';
import TestRepository from '@repositories/tests.repository';
import { Test } from '@typedefs/test.type';

@Resolver()
export class testResolver extends TestRepository {
  @Authorized()
  @Query(() => [Test], {
    description: 'Test find list',
  })
  async getTests(): Promise<Test[]> {
    const tests: Test[] = await this.testFindAll();
    return tests;
  }
}
