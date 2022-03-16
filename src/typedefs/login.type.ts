import { Field, ObjectType } from 'type-graphql';
import { User } from './users.type';

@ObjectType()
export class Login {
  @Field()
  token: string;

  @Field()
  user: User;
}
