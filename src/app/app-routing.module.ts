import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComponent } from './modules/main-module/main-module.component';

const routes: Routes = [
  { path: 'main', component: MainModuleComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: MainModuleComponent },
  { path: '**', component: MainModuleComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
