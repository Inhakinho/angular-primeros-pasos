import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //main-page-component.ts
  public characters: Character[] = [
    {
      id: uuidV4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuidV4(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuidV4(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character):void {

    const newCharacter: Character = {
      id: uuidV4(),
      ...character
    };

    this.characters.push(newCharacter);


  }

  // onDeleteCharacter (index:number){

  //   this.characters.splice(index, 1);

  // }

  deleteCharacterById(id :string){
    this.characters = this.characters.filter( character => character.id !== id);
  }


}
