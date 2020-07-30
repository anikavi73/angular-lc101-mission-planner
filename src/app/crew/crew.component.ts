import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})

export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for(let i:number = 0; i < this.crew.length; i++){
      if(this.crew[i]['name']=== memberName){
        alert("This member already exists!")
        return;
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
  }
  
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    for(let i:number = 0; i < this.crew.length; i++){
      if(this.crew[i]['name']=== name){
        alert("This member already exists!")
        return;
      }
    }
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
