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
  numberOfTeams : number | ""  = "";
  teams : string[][]= []
 
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
  noOfTeamsInput(n : string ){
    console.log('in noOfTeamsInput')
    this.numberOfTeams = Number(n)
    console.log(this.numberOfTeams)
  }
  generateTeams(){
    //create the number of arrays equal to the number of teams 
    //find a random index get that element and fill



    if(this.numberOfTeams == undefined || this.numberOfTeams <=0){
      this.errorMessage="InValid number of Teams"
      return
    }
    if(this.members.length < this.numberOfTeams){
      console.log("C1")
      this.errorMessage = "Not Enough members"
      return
    }
    this.errorMessage = ''

    console.log('no false')
    const allMembers = [...this.members]
    console.log('allmembers' , allMembers)
    //run through the outer loop 
    while(allMembers.length){
      console.log('while loop')
      // in an interation fills the number of arrays required 
      for(let i = 0 ; i < this.numberOfTeams;i++){
        console.log(i + 'th for looop')
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex , 1)[0]//starting indes and how many tp remove and return it as well
        // [0] as it will return an array and we needs its 0 value
        //if the member is  not defined break the loop last element reached eg if  numberOfTeams = 3
        // current iteration 1 , 9 , 
        //the 3rd array should be given undefined
        console.log('member' , member)
        console.log('!member' ,!member)
        if(!member)break;
        if(this.teams[i]){
          //if the array exist
          this.teams[i].push(member)
        }
        else{
          this.teams[i]=[member]//is the first element of the array unlike in the above
        }
        console.log('teams' , this.teams[i])
      }
    }
    console.log('teams' , this.teams)
    this.members = []
    this.numberOfTeams = ''

    
  }
  }

