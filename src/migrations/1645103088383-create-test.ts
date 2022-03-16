import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTest1645103088383 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "test" (
        id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
        name VARCHAR NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "test";
    `);
  }
}
