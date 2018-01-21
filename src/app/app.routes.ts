import { Routes, RouterModule } from '@angular/router';
import { PublicViewsComponent } from './public-views/public-views.component';
import { IndexComponent } from './public-views/index/index.component';
export const ROUTES: Routes = [
  {
    path: '', component: PublicViewsComponent,

  }

];

export const appRoutingProviders: any[] = [

];

export const appRouting = RouterModule.forRoot(ROUTES);