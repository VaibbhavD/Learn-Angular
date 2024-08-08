import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow-statment.component.html',
  styleUrl: './control-flow-statment.component.css',
})
export class ControlFlowStatmentComponent {
  isvisible: Boolean = true;

  isShowRed: Boolean = false;

  DayNumber: number = 0;

  students = [
    {
      name: 'vaibhav',
      rollNo: 121,
    },
    {
      name: 'Rushikesh',
      rollNo: 122,
    },
    {
      name: 'Aishwarya',
      rollNo: 123,
    },
    {
      name: 'Prathmesh',
      rollNo: 124,
    },
  ];
}
