import { Character, CharacterClass } from '@prisma/client';

export const CharacterInMemory = (props: Partial<Character>): Character => {
   const character: Character = {
      id: props.id === undefined ? '1' : props.id,
      name: props.name === undefined ? 'name' : props.name,

      strength: props.strength === undefined ? 1 : props.strength,
      dexterity: props.dexterity === undefined ? 1 : props.dexterity,
      magic: props.magic === undefined ? 1 : props.magic,
      stamina: props.stamina === undefined ? 1 : props.stamina,
      luck: props.luck === undefined ? 1 : props.luck,
      armour: props.armour === undefined ? 1 : props.armour,

      level: props.level === undefined ? 1 : props.level,
      experience: props.experience === undefined ? 1 : props.experience,

      class: props.class === undefined ? CharacterClass.RANGER : props.class,
   };

   return character;
};
