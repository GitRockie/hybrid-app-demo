import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule )
      },
      {
        path: 'map',
        loadChildren: () => import('../fab/fab.module').then(m => m.FabPageModule )
      },
      {
        path: 'news',
        loadChildren: () => import('../card/card.module').then(m => m.CardPageModule )
      },
      {
        path: 'settings',
        loadChildren: () => import('../input/input.module').then(m => m.InputPageModule )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
