import { Character, CharacterClass } from '@prisma/client';

export const CharacterStub = (props: Partial<Character>): Character => {
   const defaultCharacter: Character = {
      id: '',
      name: '',
      strength: 0,
      dexterity: 0,
      magic: 0,
      stamina: 0,
      luck: 0,
      armour: 0,
      level: 0,
      experience: 0,
      class: CharacterClass.RANGER,
   };

   const character: Character = {
      ...defaultCharacter,
      ...props,
   };

   return character;
};
