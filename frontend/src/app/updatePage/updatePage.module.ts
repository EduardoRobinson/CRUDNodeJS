import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 

import { UpdatePage } from './updatePage';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UpdatePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule,
    FormsModule 
],
  exports: [RouterModule],
  declarations:[UpdatePage]
})


export class UpdatePageModule {}
