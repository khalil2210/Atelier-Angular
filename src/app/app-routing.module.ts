import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { article } from './core/models/article';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';

const routes: Routes = [
{path:'exercice1',component:OffresEmploiComponentComponent},
{path:'exercice2',component:ArticlesComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
