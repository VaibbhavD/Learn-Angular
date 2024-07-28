import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from '../components/structural-directives/structural-directives.component';
import { AttributesDirectivesComponent } from '../components/attributes-directives/attributes-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttributesDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first';
}
