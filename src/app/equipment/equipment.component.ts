import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearCapacity: false;
   

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item){
    if(this.cargoHold.length < this.maxItems && this.cargoMass +item.mass <= this.maximumAllowedMass){
       this.cargoHold.push(item);
       this.cargoMass += item.mass;      
    } 
    return this.maximumAllowedMass -200 < this.cargoMass;
  }
  
  canAddCargo(item){
    return this.cargoHold.length !== this.maxItems || this.cargoMass + item.mass <= this.maximumAllowedMass;
  }

  emptyHold(){
    this.cargoHold = [];
    this.cargoMass = 0;
  }  
}
