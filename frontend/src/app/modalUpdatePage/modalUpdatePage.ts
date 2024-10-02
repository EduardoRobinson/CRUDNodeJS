import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Chamado } from '../shared/chamado.model';
import { ChamadoService } from '../shared/chamado.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './modalUpdatePage.html',
  styleUrls: ['./modalUpdatePage.scss'],
})
export class ModalUpdatePage  implements OnInit {
  public chamado:Chamado;
  public selectedStatus: string='';
  public toastMessage: string = '';
  public toastColor: string = 'success';
  @ViewChild('toast', { static: false }) toast!: HTMLIonToastElement; 
  constructor(private navParams: NavParams,private modalController: ModalController,private service: ChamadoService,
    private toastController: ToastController,private router: Router) { 
    this.chamado = this.navParams.get('chamado');
  }
  
  ngOnInit() {
    this.selectedStatus = this.chamado.status;
    console.log('Chamado Recebido:', this.chamado);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  statusChanged() {
    console.log('Status alterado para:', this.selectedStatus);
  }

  saveChanges(){
    this.service.atualizarChamado(this.chamado.id ?? 0,this.selectedStatus).subscribe(
      async (chamado) =>{
        this.toastMessage = 'Chamado atualizado com sucesso!';
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
        this.modalController.dismiss();
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
        this.modalController.dismiss();

      }
    );
  }

}
