import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { SinglecountryComponent } from './singlecountry/singlecountry.component';

const routes: Routes = [
  {
    path: 'countries', component: CountryComponent
  },
  {
    path: 'countries/:singlecountry.name.common', component: SinglecountryComponent
  },
  {
    path: '', redirectTo: 'countries', pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
