import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chamado } from 'src/Models/Chamado.model';

@Injectable()
export class ChamadoService {
  constructor(
    @InjectRepository(Chamado)
    private readonly chamadoRepository: Repository<Chamado>,
  ) {}

  // Exemplo de método para criar um chamado
  async create(chamado: Chamado): Promise<Chamado> {
    return this.chamadoRepository.save(chamado);
  }

  async read() : Promise<Chamado[]> {
    return this.chamadoRepository.find();
  }

  async update(id:number,status:string){
    return this.chamadoRepository.update(id,{status:status});
  }

  async delete(id:number){
    return this.chamadoRepository.delete({id:id});
  }

}