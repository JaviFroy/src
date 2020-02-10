import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './componentes/central/central.component';


const routes: Routes = [
  { path: 'central', component: CentralComponent },
  { path: '', redirectTo: '/central', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
