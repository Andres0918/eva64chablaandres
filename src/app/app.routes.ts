import { Routes } from '@angular/router';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';

export const routes: Routes = [
    {path:"formulario", component: FormularioComponent},
    {path:"visualizar", component: VisualizarComponent},
    {path:"administrar", component: AdministrarComponent},
];
