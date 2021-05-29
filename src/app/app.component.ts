import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введите имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>`,
    styles: [`
            h1,h2{color:navy;}
            p{font-size:13px; font-family:Verdana;}
            :host{
                font-family: Verdana;
                color: #555;
            }`]
})
export class AppComponent { 
    name= '';
}