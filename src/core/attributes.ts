import { Character } from '@prisma/client';
import { clamp } from '../utils/clamp';

export const computeDodge = (character: Character): number => {
   return Math.floor(character.dexterity / 2);
};

export const computeSpirit = (character: Character): number => {
   return Math.floor(character.magic / 2);
};

export const computeConstitution = (character: Character): number => {
   return Math.floor(character.strength / 2);
};

export const computeHealth = (character: Character): number => {
   return character.stamina * 4 * (character.level + 1);
};

export const computeCriticalChance = (character: Character): number => {
   const criticalChance = (character.luck * 5) / (character.level * 2);
   const effectiveCriticalChance = clamp(criticalChance, 0, 50);
   return Math.round(effectiveCriticalChance * 100) / 100;
};

export const computeDamageReduction = (character: Character): number => {
   const damageReduction = character.armour / character.level;
   const effectiveDamageReduction = Math.min(damageReduction, 25);
   return Math.floor(effectiveDamageReduction);
};
