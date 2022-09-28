import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComprasComponent } from './listar-compras/listar-compras.component';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarComprasComponent } from './registrar-compras/registrar-compras.component';
import { RegistrarGastoComponent } from './registrar-gasto/registrar-gasto.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '',redirectTo: 'menu',pathMatch: 'full'},
  {path: 'gasto', component: ListarGastoComponent},
  {path: 'nuevogasto', component: RegistrarGastoComponent},
  {path: 'compra', component: ListarComprasComponent},
  {path: 'nuevacompra', component: RegistrarComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
