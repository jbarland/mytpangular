import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = 'angulardell';



  calcMoyenne(tabNumber: Array<number>): number {
    let somme: number = 0;
    for (const grade of tabNumber){
      somme += grade;
    }
    return somme/tabNumber.length;
  }

  arrayStudents: Array<Student> = [
    { name: 'Albert', grades: [12,8,9,7,13] },
    { name: 'Vincent', grades: [14, 13, 12, 11, 10] },
    { name: 'Michel', grades: [17, 16, 15, 18, 13] },
  ];
}

interface Student {
  name: string;
  grades: Array<number>;
}
