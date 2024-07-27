import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  coursename: string = 'Angular 18';
  stylename = 'bg-primary';
  inputtype = 'checkbox';
  rollno: number = 120;
  isindian: boolean = true;
  currentdate: Date = new Date();

  firstName = signal('Vaibhav Dhamanage');

  constructor() {}

  showalert(e: string) {
    alert(e);
  }
  ChangeName() {
    this.coursename = 'React.js';
    this.firstName.set('Dhamanage Vaibhav');
  }
}
