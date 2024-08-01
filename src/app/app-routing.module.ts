import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { LoginComponent } from './components/login/login.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponentComponent,
  pathMatch:'full'
},
{
  path:'register',
  component:RegisterComponentComponent,
  pathMatch:'full'
},
{
  path:'dash',
  component:DashboardComponent,
  // pathMatch:'full',
  children:[
    {
      path:'authors',
      component:AuthorListComponent,
      // pathMatch:'full',
    },
    {
      path:'favList',
      component:FavouriteListComponent,
      pathMatch:'full'
    }
  ]
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
