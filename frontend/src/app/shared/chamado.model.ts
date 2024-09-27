export class Chamado {
    id?: number;
    titulo: string;
    descricao: string;
    status: string;
    dataabertura: string;
    datafechamento?: Date;
    categoria:string;
  
    constructor(titulo: string, descricao: string,categoria:string ) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.status = 'aberto';
      this.dataabertura = this.formatDate(new Date());
      this.categoria=categoria;
    }


    private formatDate(date: Date): string {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
      const year = date.getFullYear();
      return `${year}-${month}-${day}`; // Retorna a data no formato dd/mm/yyyy
    }
    

}