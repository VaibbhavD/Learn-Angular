import {
  DatePipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
  JsonPipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, PercentPipe, JsonPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  name: string = 'Vaibhav';

  date: Date = new Date();

  marks: number = 0.7;

  studentObj: {} = {
    name: 'Vaibhav',
    RollNo: 121,
    id: Math.random(),
  };
}
