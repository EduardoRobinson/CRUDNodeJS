import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChamadoService } from 'src/Service/Chamado.service';
import { Chamado } from 'src/Models/Chamado.model';

@Controller('chamados')
export class ChamadoController {
  constructor(private readonly chamadoService: ChamadoService) {}

  @Post()
  create(@Body() chamado: Chamado): Promise<Chamado> {
    return this.chamadoService.create(chamado);
  }

  @Get()
  read():Promise<Chamado[]> {
    return this.chamadoService.read();
  }

  // Outros endpoints podem ser adicionados aqui
}