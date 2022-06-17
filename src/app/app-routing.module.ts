import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Services', component:ServicesComponent},
  {path:'Clients', component:ClientsComponent},
  {path:'Contact us', component:ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
