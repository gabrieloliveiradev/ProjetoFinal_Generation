import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FAQComponent } from './faq/faq.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticaComponent } from './politica/politica.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CadClienteComponent } from './cad-cliente/cad-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditarComponent } from './editar/editar.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';
<<<<<<< HEAD
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component'
=======
import { ProfissionaisComponent } from './profissionais/profissionais.component'
>>>>>>> 7ef55999100156c57bb051041524d35e6fa9d750

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    FAQComponent,
    NavComponent,
    FooterComponent,
    PoliticaComponent,
    QuemsomosComponent,
    ProdutoComponent,
    ListaUsuariosComponent,
    CadClienteComponent,
    LoginClienteComponent,
    EditarComponent,
    DeleteUsuarioComponent,
    CategoriasComponent,
    PerfilClienteComponent
    ProfissionaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
