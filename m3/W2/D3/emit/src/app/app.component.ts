import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  {
    name: 'marco',
    lastname: 'Rossi',
    gender: 'maschio'
  },
  {
    name: 'marc',
    lastname: 'Rossi',
    gender: 'femmina'
  }
  name: string = '';
  lastname: string = '';
  aggiungiUomo({
    let newUser:User = new User(this.name, this.lastname, 'maschio')
    this.users.push(newUser);
  })
  aggiungiDonna({
    let newUser:User = new User(this.name, this.lastname, 'Femmina')
    this.users.push(newUser);
  })
  resetForm(){
    this.name = '';
    this.lastname = '';
  }
}

