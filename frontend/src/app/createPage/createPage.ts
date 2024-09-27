import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Chamado } from '../shared/chamado.model';
import { ChamadoService } from '../shared/chamado.service';
import { ToastController } from '@ionic/angular';

@Component({
  templateUrl: './createPage.html',
  styleUrls: ['./createPage.scss'],
})
export class CreatePage{
  public id: string = '';
  public titulo: string = '';
  public descricao: string = '';
  public status: string = '';
  public categoria:string = '';
  public chamado?:Chamado;
  public toastMessage: string = '';
  public toastColor: string = 'success';

  @ViewChild('toast', { static: false }) toast!: HTMLIonToastElement; 
  constructor(private router: Router, private service: ChamadoService,private toastController: ToastController) {}




  public submit(){
    this.chamado= new Chamado(this.titulo,this.descricao,this.categoria);
    this.service.adicionarChamado(this.chamado).subscribe(
      async (chamado) =>{
        this.toastMessage = 'Chamado salvo com sucesso!';
        this.toastColor = 'success';

        const toast = await this.toastController.create({
          message: this.toastMessage,
          duration: 2000,
          position: 'top',
          color: this.toastColor,
        });
        await toast.present();

        setTimeout(() => {
          this.router.navigate(['']); // Substitua '/home' pela sua rota inicial
        }, 1000);
      },
      async (erro) =>{
        this.toastMessage = 'Erro ao salvar o chamado.';
        this.toastColor = 'danger'; // Define a cor para erro

        // Exibir o toast de erro
        const toast = await this.toastController.create({
          message: this.toastMessage,
          duration: 2000,
          position: 'top',
          color: this.toastColor,
        });
        await toast.present();

      }
    );
  }


  public updateSelectedCategory(){

  }

}
