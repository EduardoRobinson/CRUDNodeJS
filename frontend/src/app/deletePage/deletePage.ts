import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Chamado } from '../shared/chamado.model';
import { ChamadoService } from '../shared/chamado.service';
import { ModalDeletePage } from '../modalDeletePage/modalDeletePage.component';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './deletePage.html',
  styleUrls: ['./deletepage.scss'],
})
export class DeletePage{

  public chamados:Chamado[] = [];
  constructor(private router: Router, private service: ChamadoService,private modalController: ModalController) {
    this.get();
  }
  ngOnInit(): void{
    
  }

async get(){
  return this.service.listarChamados().subscribe(async (data: Chamado[]) => {
    this.chamados = data; 
  });
}

async openModal(chamado:Chamado){
  const modal = await this.modalController.create({
    component:ModalDeletePage ,
    componentProps:{
      chamado : chamado
    } 
  });
  return await modal.present(); 

}
}
