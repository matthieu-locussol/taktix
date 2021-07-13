import { CharacterClass } from '@prisma/client';
import { computeDamages } from '../../../src/core/damages';
import { CharacterInMemory } from './gateways/CharacterInMemory';

describe('computeDamages', () => {
   describe('ranger character', () => {
      test('with no dexterity', () => {
         const ranger = CharacterInMemory({ dexterity: 0, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(125);
      });

      test('with an even dexterity', () => {
         const ranger = CharacterInMemory({ dexterity: 26, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(450);
      });

      test('with an odd dexterity', () => {
         const ranger = CharacterInMemory({ dexterity: 57, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(837);
      });
   });

   describe('warrior character', () => {
      test('with no strength', () => {
         const warrior = CharacterInMemory({ strength: 0, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(125);
      });

      test('with an even strength', () => {
         const warrior = CharacterInMemory({ strength: 26, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(450);
      });

      test('with an odd strength', () => {
         const warrior = CharacterInMemory({ strength: 57, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(837);
      });
   });

   describe('wizard character', () => {
      test('with no magic', () => {
         const wizard = CharacterInMemory({ magic: 0, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(125);
      });

      test('with an even magic', () => {
         const wizard = CharacterInMemory({ magic: 26, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(450);
      });

      test('with an odd magic', () => {
         const wizard = CharacterInMemory({ magic: 57, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(837);
      });
   });
});
