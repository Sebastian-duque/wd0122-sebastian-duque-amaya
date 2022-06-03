import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Progetto Todo';
  list:any[]=[]
  addTask(item:string){

    this.list.push({id:this.list.length,name:item});
    console.log(this.list)
  }
  removeTask(id:number){
    console.log(id)
    this.list=this.list.filter(item => item.id!==id)
  }
  ModifyTask(id:number){
    console.log(id)
    let index = this.list.indexOf(id)
    this.list.splice(index, 1, id)

  }
  getTask(id:number){
    this.list.find(item => item.id === id)
  }
}
