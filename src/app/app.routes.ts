import { Routes } from '@angular/router';
import { AttributesDirectivesComponent } from '../components/attributes-directives/attributes-directives.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from '../components/structural-directives/structural-directives.component';

export const routes: Routes = [
  {
    path: 'attributes-directives',
    component: AttributesDirectivesComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structual-directives',
    component: StructuralDirectivesComponent,
  },
];
