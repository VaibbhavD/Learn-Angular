import { Routes } from '@angular/router';
import { AttributesDirectivesComponent } from '../components/attributes-directives/attributes-directives.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from '../components/structural-directives/structural-directives.component';
import { ControlFlowStatmentComponent } from '../components/control-flow-statment/control-flow-statment.component';
import { PipesComponent } from '../components/pipes/pipes.component';
import { FormValidationComponent } from '../components/form-validation/form-validation.component';

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
  {
    path: 'Control-flow-statment',
    component: ControlFlowStatmentComponent,
  },
  {
    path: 'Pipes',
    component: PipesComponent,
  },
  {
    path: 'Form',
    component: FormValidationComponent,
  },
];
