import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css',
})
export class FormValidationComponent {
  User = {
    firstname: '',
    lastname: '',
    username: '',
    city: '',
    state: '',
    zip: 0,
    isChecked: false,
  };

  formdata: any;

  onSubmit() {
    this.formdata = this.User;
  }
}
