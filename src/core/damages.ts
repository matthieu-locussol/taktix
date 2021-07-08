import { Character } from '@prisma/client';

export const computeDamages = (weaponDamages: number, character: Character): number => {
   switch (character.class) {
      case 'RANGER':
         return Math.floor(weaponDamages * (1 + character.dexterity / 10));
      case 'WARRIOR':
         return Math.floor(weaponDamages * (1 + character.strength / 10));
      case 'WIZARD':
         return Math.floor(weaponDamages * (1 + character.magic / 10));
      default:
         throw new Error('Unknown class!');
   }
};
