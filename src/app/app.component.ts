import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamGenerator';
  newListMemberName = "";
  members : string[]= [];
  addMembers(){ 
    this.members.push(this.newListMemberName)
    console.log(this.members)
    this.newListMemberName = ''

  }
  onInput(m : string){
    this.newListMemberName = m
    console.log(m)
    
  }
  }

