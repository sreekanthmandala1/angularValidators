import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorsComponent } from './components/validators/validators.component';

const routes: Routes = [
  {
    path:'validators' , component : ValidatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
