import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { PoliticaComponent } from './politica/politica.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CadClienteComponent } from './cad-cliente/cad-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'politica', component: PoliticaComponent},
  { path: 'contato', component: ContatoComponent},
  {path: 'produto', component: ProdutoComponent},
  { path: 'users', component: ListaUsuariosComponent},
  { path: 'cadastro-usuario', component: CadClienteComponent},
  { path:'login-cliente', component: LoginClienteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
