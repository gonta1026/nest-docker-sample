import { MigrationInterface, QueryRunner } from 'typeorm';

export class fugafugaMigration1667108741166 implements MigrationInterface {
  name = 'fugafugaMigration1667108741166';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD \`fugafuga\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`comment\` DROP COLUMN \`fugafuga\``);
  }
}
