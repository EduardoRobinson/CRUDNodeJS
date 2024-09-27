import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('chamados') // Nome da tabela no banco de dados
export class Chamado {
  @PrimaryGeneratedColumn() // Chave primária autoincrementada
  id: number;

  @Column() // Coluna do banco de dados
  titulo: string;

  @Column() // Coluna do banco de dados
  descricao: string;

  @Column() // Coluna do banco de dados
  status: string;

  @Column()
  categoria:string;

  @Column() // Coluna do banco de dados
  dataabertura: Date;

  @Column({ nullable: true }) // Coluna do banco de dados, pode ser nula
  datafechamento?: Date;
}