import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Test } from '@interfaces/test.interface';

@Entity('test')
export class TestEntity extends BaseEntity implements Test {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  name: string;
}
