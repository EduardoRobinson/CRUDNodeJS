import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChamadoModule } from './Modules/Chamado.module';
import { Chamado } from './Models/Chamado.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432, 
      username:'postgres',
      password:'2032',
      database: 'CrudNode',
      entities: [`${__dirname}/Models/{.ts,*.js}`],
      migrations:[`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun:true
    }),
    ChamadoModule,
  ],
})
export class AppModule {}
