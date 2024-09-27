import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadoService } from 'src/Service/Chamado.service';
import { Chamado } from 'src/Models/Chamado.model';
import { ChamadoController } from 'src/Controllers/Chamado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chamado])], // Registra a model
  controllers: [ChamadoController],
  providers: [ChamadoService],
})
export class ChamadoModule {}