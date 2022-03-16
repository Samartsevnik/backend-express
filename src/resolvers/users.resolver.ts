import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { CreateUserDto } from '@dtos/users.dto';
import UserRepository from '@repositories/users.repository';
import { User } from '@typedefs/users.type';

@Resolver()
export class userResolver extends UserRepository {
  @Authorized()
  @Query(() => [User], {
    description: 'User find list',
  })
  async getUsers(): Promise<User[]> {
    const users: User[] = await this.userFindAll();
    return users;
  }

  @Authorized()
  @Query(() => User, {
    description: 'User find by id',
  })
  async getUserById(@Arg('userId') userId: string): Promise<User> {
    const user: User = await this.userFindById(userId);
    return user;
  }

  @Authorized()
  @Mutation(() => User, {
    description: 'User create',
  })
  async createUser(@Arg('userData') userData: CreateUserDto): Promise<User> {
    const user: User = await this.userCreate(userData);
    return user;
  }

  @Authorized()
  @Mutation(() => User, {
    description: 'User update',
  })
  async updateUser(@Arg('userId') userId: string, @Arg('userData') userData: CreateUserDto): Promise<User> {
    const user: User = await this.userUpdate(userId, userData);
    return user;
  }

  @Authorized()
  @Mutation(() => User, {
    description: 'User delete',
  })
  async deleteUser(@Arg('userId') userId: string): Promise<User> {
    const user: User = await this.userDelete(userId);
    return user;
  }
}