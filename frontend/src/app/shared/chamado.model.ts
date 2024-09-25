export class Chamado {
    id: string;
    titulo: string;
    descricao: string;
    status: string;
    dataAbertura: Date;
    dataFechamento?: Date;
  
    constructor(id: string, titulo: string, descricao: string, status: string, dataAbertura: Date, dataFechamento?: Date) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
      this.status = 'aberto';
      this.dataAbertura = dataAbertura;
      this.dataFechamento = dataFechamento;
    }

}