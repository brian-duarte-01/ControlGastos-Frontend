import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';
import { RegistrarGastoComponent } from './registrar-gasto/registrar-gasto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarComprasComponent } from './listar-compras/listar-compras.component';
import { RegistrarComprasComponent } from './registrar-compras/registrar-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarGastoComponent,
    RegistrarGastoComponent,
    ListarComprasComponent,
    RegistrarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
