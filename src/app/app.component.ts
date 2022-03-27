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
  errorMessage  = '';
  addMembers(){ 
      if(!this.newListMemberName){
        this.errorMessage = 'Name cannot be Empty';
        return;
      }
    this.members.push(this.newListMemberName)
    console.log(this.members)
    this.newListMemberName = ''
    this.errorMessage=''

  }
  onInput(m : string){
    this.newListMemberName = m
    console.log(m)
    
  }
  }

