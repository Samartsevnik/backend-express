import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Test {
  @Field()
  id: string;

  @Field()
  name: string;
}
