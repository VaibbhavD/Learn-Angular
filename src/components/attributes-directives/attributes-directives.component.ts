import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributes-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attributes-directives.component.html',
  styleUrl: './attributes-directives.component.css',
})
export class AttributesDirectivesComponent {
  stylecolor = 'bg-primary';

  num1: string = '';
  num2: string = '';

  ShowRed() {
    this.stylecolor = 'bg-danger';
  }

  ShowBlue() {
    this.stylecolor = 'bg-primary';
  }

  Students = [
    { id: '101', name: 'Vaibhav', rollNo: '1', status: true, marks: 70 },
    { id: '102', name: 'Rushikesh', rollNo: '2', status: false, marks: 56 },
    { id: '103', name: 'Prathmesh', rollNo: '3', status: false, marks: 80 },
    { id: '104', name: 'Aishwarys', rollNo: '4', status: true, marks: 65 },
    { id: '105', name: 'Onkar', rollNo: '5', status: false, marks: 97 },
  ];
}
