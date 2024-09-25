import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 

import { DeletePage } from './deletePage';

const routes: Routes = [
  {
    path: '',
    component: DeletePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule
],
  exports: [RouterModule],
  declarations:[DeletePage]
})


export class DeletePageModule {}
