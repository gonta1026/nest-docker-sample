import { MigrationInterface, QueryRunner } from 'typeorm';

export class addbodybodyMigration1667108457095 implements MigrationInterface {
  name = 'addbodybodyMigration1667108457095';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`bodybody\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`bodybody\``);
  }
}
