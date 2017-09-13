/* import { Component, EventEmitter } from '@angular/core';


@Component ({
  selector: 'my-proprty-binding',
  template: `
      <h1> This is Child Component</h1>
      <p> Hey {{myName}}  and  i am {{myAge}} years old</p>
      <h2> my hobbies are:</h2>
      <input type="text" (keyup)= "onHobbieschanged(hobbies.value)" #hobbies>
  `,
    inputs: ['myName','myAge']
    outputs: ['hobbiesChanged']
})

export class CustomPropertyEventBindingComponent {
    myName: '';
    myAge: 20;
    hobbiesChanged = new EventEmitter<string>();

    onHobbieschanged(hobbies: string) {
     this.hobbiesChanged.emit(hobbies);
    }

} */