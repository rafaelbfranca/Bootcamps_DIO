import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  //Home
  {
    path: '', /*Declarar o path vazio aqui para que o componente abaixo seja chamado ao iniciar a aplicação.*/
    component: HomeComponent /*Declarar aqui o nome da classe do componente que será chamado ao iniciar a aplicação. Esta classe está localizada no arquivo .ts do componente. Neste caso home.component.ts */
  },
  //Aluno
  {
    path: 'alunos',
    component: AlunosComponent
  },
  //Professor
  {
    path: 'professores',
    component: ProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
