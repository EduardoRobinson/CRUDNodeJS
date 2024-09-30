import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ChamadoService } from '../shared/chamado.service';
import { Chamado } from '../shared/chamado.model';

@Component({
  templateUrl: './readPage.html',
  styleUrls: ['./readPage.scss'],
})
export class ReadPage implements OnInit{

  public chamados:Chamado[] = [];
  constructor(private router: Router, private service: ChamadoService) {}
  ngOnInit(): void{
    this.get();
    
  }

async get(){
  return this.service.listarChamados().subscribe(async (data: Chamado[]) => {
    this.chamados = data; 
    console.log(this.chamados);
  });
}



}
