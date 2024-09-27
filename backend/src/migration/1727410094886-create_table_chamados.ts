import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableChamados1727410094886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`CREATE TABLE public.chamados(
           id SERIAL PRIMARY KEY,
           titulo character varying NOT NULL,
           descricao character varying NOT NULL,
           status character varying NOT NULL,
           categoria character varying NOT NULL,
           dataAbertura Date,
           dataFechamento Date)`)
    }
 
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('drop table CrudNode.chamados')
    }

}
