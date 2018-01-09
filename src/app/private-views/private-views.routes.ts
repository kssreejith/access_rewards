import {Routes, RouterModule} from '@angular/router';
import { PrivateViewsComponent } from "./private-views.component"
import { DashboardComponent } from "./dashboard/dashboard.component"

export const privateROUTES:Routes = [
 {
    path: 'home', component: PrivateViewsComponent,
    data: {
      title: 'Home'
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent,
        data: {
          title: 'DashBoard'
        },
       },
    
      { path: '**', redirectTo: 'dashboard'}
    ]
  }

];

export const privateViewsProviders: any[] = [

];

export const privateRoute =  RouterModule.forChild(privateROUTES);

