import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUserAndPurpose1721738026189 implements MigrationInterface {
    name = 'InitUserAndPurpose1721738026189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purpose" ("id" SERIAL NOT NULL, "text" character varying(255) NOT NULL, "date" TIMESTAMP NOT NULL, "isCompleted" boolean NOT NULL, "userId" integer, CONSTRAINT "PK_9f89c13188de03afb221ef2a4ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(64) NOT NULL, "password" character varying(128) NOT NULL, "email" character varying(128) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purpose" ADD CONSTRAINT "FK_9b609c2bc06ed1bc442b115c88a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purpose" DROP CONSTRAINT "FK_9b609c2bc06ed1bc442b115c88a"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "purpose"`);
    }

}
