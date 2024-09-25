import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homePage/homePage.module').then( m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./createPage/createPage.module').then( m => m.CreatePageModule)
  },
  {
    path: 'read',
    loadChildren: () => import('./readPage/readPage.module').then( m => m.ReadPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./updatePage/updatePage.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./deletePage/deletePage.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
