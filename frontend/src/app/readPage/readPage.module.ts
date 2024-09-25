import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { ReadPage } from './readPage';


const routes: Routes = [
  {
    path: '',
    component: ReadPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule,
    CommonModule
],
  exports: [RouterModule],
  declarations:[ReadPage]
})


export class ReadPageModule {}
