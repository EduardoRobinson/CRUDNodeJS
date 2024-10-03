import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { ChamadoService } from '../shared/chamado.service';
import { Chamado } from '../shared/chamado.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './modalDeletePage.component.html',
  styleUrls: ['./modalDeletePage.component.scss'],
})
export class ModalDeletePage implements OnInit {
  public chamado:Chamado;
  public toastMessage: string = '';
  public toastColor: string = 'success';
  constructor(private navParams: NavParams,private modalController: ModalController,private service: ChamadoService,
    private toastController: ToastController,private router: Router) {
    this.chamado = this.navParams.get('chamado');
   }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }


  delete(){
    this.service.excluirChamado(this.chamado.id ?? 0).subscribe(
      async (chamado) =>{
        this.toastMessage = 'Chamado deletado com sucesso!';
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
        this.toastMessage = 'Erro ao deletar o chamado.';
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
