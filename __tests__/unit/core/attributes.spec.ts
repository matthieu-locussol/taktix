import {
   computeConstitution,
   computeCriticalChance,
   computeDamageReduction,
   computeDodge,
   computeHealth,
   computeSpirit,
} from '../../../src/core/attributes';
import { CharacterInMemory } from './gateways/CharacterInMemory';

describe('computeDodge', () => {
   test('with no dexterity', () => {
      const character = CharacterInMemory({ dexterity: 0 });
      const dodge = computeDodge(character);
      expect(dodge).toBe(0);
   });

   test('with an even dexterity', () => {
      const character = CharacterInMemory({ dexterity: 92 });
      const dodge = computeDodge(character);
      expect(dodge).toBe(46);
   });

   test('with an odd dexterity', () => {
      const character = CharacterInMemory({ dexterity: 67 });
      const dodge = computeDodge(character);
      expect(dodge).toBe(33);
   });
});

describe('computeSpirit', () => {
   test('with no magic', () => {
      const character = CharacterInMemory({ magic: 0 });
      const spirit = computeSpirit(character);
      expect(spirit).toBe(0);
   });

   test('with an even magic', () => {
      const character = CharacterInMemory({ magic: 92 });
      const spirit = computeSpirit(character);
      expect(spirit).toBe(46);
   });

   test('with an odd magic', () => {
      const character = CharacterInMemory({ magic: 67 });
      const spirit = computeSpirit(character);
      expect(spirit).toBe(33);
   });
});

describe('computeConstitution', () => {
   test('with no strength', () => {
      const character = CharacterInMemory({ strength: 0 });
      const constitution = computeConstitution(character);
      expect(constitution).toBe(0);
   });

   test('with an even strength', () => {
      const character = CharacterInMemory({ strength: 92 });
      const constitution = computeConstitution(character);
      expect(constitution).toBe(46);
   });

   test('with an odd strength', () => {
      const character = CharacterInMemory({ strength: 67 });
      const constitution = computeConstitution(character);
      expect(constitution).toBe(33);
   });
});

describe('computeHealth', () => {
   test('with no stamina', () => {
      const character = CharacterInMemory({ stamina: 0, level: 1 });
      const health = computeHealth(character);
      expect(health).toBe(0);
   });

   test('with a positive stamina', () => {
      const character = CharacterInMemory({ stamina: 118, level: 21 });
      const health = computeHealth(character);
      expect(health).toBe(10384);
   });
});

describe('computeCriticalChance', () => {
   test('with no luck', () => {
      const character = CharacterInMemory({ luck: 0, level: 1 });
      const criticalChance = computeCriticalChance(character);
      expect(criticalChance).toBe(0);
   });

   test('with a positive luck', () => {
      const character = CharacterInMemory({ luck: 197, level: 21 });
      const criticalChance = computeCriticalChance(character);
      expect(criticalChance).toBe(23.45);
   });

   test('critical chance greater than 50%', () => {
      const character = CharacterInMemory({ luck: 9999, level: 21 });
      const criticalChance = computeCriticalChance(character);
      expect(criticalChance).toBe(50);
   });
});

describe('computeDamageReduction', () => {
   test('with no armour', () => {
      const character = CharacterInMemory({ armour: 0, level: 1 });
      const damageReduction = computeDamageReduction(character);
      expect(damageReduction).toBe(0);
   });

   test('with no armour', () => {
      const character = CharacterInMemory({ armour: 356, level: 21 });
      const damageReduction = computeDamageReduction(character);
      expect(damageReduction).toBe(16);
   });

   test('damage reduction greater than 25%', () => {
      const character = CharacterInMemory({ armour: 99999, level: 21 });
      const damageReduction = computeDamageReduction(character);
      expect(damageReduction).toBe(25);
   });
});
