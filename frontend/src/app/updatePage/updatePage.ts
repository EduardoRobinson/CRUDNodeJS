import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ChamadoService } from '../shared/chamado.service';
import { Chamado } from '../shared/chamado.model';
import { ModalController } from '@ionic/angular';
import { ModalUpdatePage } from '../modalUpdatePage/modalUpdatePage';



@Component({
  templateUrl: './updatePage.html',
  styleUrls: ['./updatePage.scss'],
})
export class UpdatePage implements OnInit{

  public chamados:Chamado[] = [];
  constructor(private router: Router, private service: ChamadoService,private modalController: ModalController) {}
  ngOnInit(): void{
    this.get();
    
  }

async get(){
  return this.service.listarChamados().subscribe(async (data: Chamado[]) => {
    this.chamados = data; 
    console.log(this.chamados);
  });
}

  async openModal(chamado:Chamado){
  const modal = await this.modalController.create({
    component: ModalUpdatePage,
    componentProps:{
      chamado : chamado
    } 
  });
  return await modal.present(); 
}


}
