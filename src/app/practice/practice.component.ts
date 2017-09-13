import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-practice',
  template: `
         <h1>Property Binding with a Custom Component</h1>
         <section class='parent'>
         <h2> This is My parent Component</h2>
         <h3>Please enter Your Name</h3>
         <input type="text" [(ngModel)]="name" >
         <br><br>
         <section class="child">
         <my-proprty-binding [myName]='name'  [myAge]='age' (hobbiesChanged)="hobbies=$event"></my-proprty-binding>
         <p> my Hobbies are: {{hobbies}} </p>
         </section>
         </section>
         <div>
         <my-attributebinding></my-attributebinding>
         </div>
  `,

  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  name: '';
  age: 26;
  hobbies: ' ';

  constructor() { }

  ngOnInit() {
  }

}
