import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  Countries = ['India', 'Russia', 'Japan', 'China', 'America'];

  Students = [
    { id: '101', name: 'Vaibhav', rollNo: '1', status: true },
    { id: '102', name: 'Rushikesh', rollNo: '2', status: false },
    { id: '103', name: 'Prathmesh', rollNo: '3', status: false },
    { id: '104', name: 'Aishwarys', rollNo: '4', status: true },
    { id: '105', name: 'Onkar', rollNo: '5', status: false },
  ];

  selectname = '';
}
