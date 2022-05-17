import { NgModule, LOCALE_ID } from '@angular/core'; //LOCALE_ID importado para utilizar padrões numéricos específicos de acordo com o país do dado inserido.
import { registerLocaleData } from '@angular/common'; //Importado para o LOCALE_ID poder funcionar.
import ptBr from '@angular/common/locales/pt'; //Importado para o LOCALE_ID reconhecer o padrão numérico brasileiro.
registerLocaleData(ptBr); //Declarado para o LOCALE_ID aplicar o padrão numérico brasileiro.
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ButtonComponent } from './components/button/button.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { UpperCasePipe } from '@angular/common';
import { PrintListPipe } from './print-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserFormComponent,
    TodoListComponent,
    TodoItemComponent,
    DataBindingComponent,
    ButtonComponent,
    LifeCycleComponent,
    PipesExampleComponent,
    PrintListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [UpperCasePipe, {provide: LOCALE_ID,      useValue: 'pt-BR'    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
