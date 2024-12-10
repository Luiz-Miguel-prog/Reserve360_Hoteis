import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  
  {
    path: 'jalapao',
    loadChildren: () => import('./jalapão/jalapao/jalapao.module').then( m => m.JalapaoPageModule)
  },
  {
    path: 'comentar',
    loadChildren: () => import('./jalapão/comentar/comentar.module').then( m => m.ComentarPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./jalapão/reserva/reserva.module').then(m => m.ReservaPageModule)
  },  
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'reservado',
    loadChildren: () => import('./reservado/reservado.module').then( m => m.ReservadoPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./jalapão/checkin/checkin.module').then( m => m.CheckinPageModule)
  },
  {
    path: 'hoteljalapao',
    loadChildren: () => import('./jalapão/hoteljalapao/hoteljalapao.module').then( m => m.HoteljalapaoPageModule)
  },
  {
    path: 'detalheshotel',
    loadChildren: () => import('./jalapão/detalheshotel/detalheshotel.module').then( m => m.DetalheshotelPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'inscrever',
    loadChildren: () => import('./inscrever/inscrever.module').then( m => m.InscreverPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./termos/termos.module').then( m => m.TermosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
