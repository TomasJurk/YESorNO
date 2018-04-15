import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { YesNoComponent } from './yes-no/yes-no.component';

const routes: Routes = [
  {path: '', redirectTo: '/Main', pathMatch: 'full'},
  {path: 'ChuckNorris', component: ChuckNorrisComponent},
  {path: 'Main', component: YesNoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
