import { CharacterClass } from '@prisma/client';
import { computeDamages } from '../../../src/core/damages';
import { CharacterStub } from './stubs/CharacterStub';

describe('computeDamages', () => {
   describe('ranger character', () => {
      test('with no dexterity', () => {
         const ranger = CharacterStub({ dexterity: 0, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(125);
      });

      test('with an even dexterity', () => {
         const ranger = CharacterStub({ dexterity: 26, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(450);
      });

      test('with an odd dexterity', () => {
         const ranger = CharacterStub({ dexterity: 57, class: CharacterClass.RANGER });
         const damages = computeDamages(125, ranger);
         expect(damages).toBe(837);
      });
   });

   describe('warrior character', () => {
      test('with no strength', () => {
         const warrior = CharacterStub({ strength: 0, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(125);
      });

      test('with an even strength', () => {
         const warrior = CharacterStub({ strength: 26, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(450);
      });

      test('with an odd strength', () => {
         const warrior = CharacterStub({ strength: 57, class: CharacterClass.WARRIOR });
         const damages = computeDamages(125, warrior);
         expect(damages).toBe(837);
      });
   });

   describe('wizard character', () => {
      test('with no magic', () => {
         const wizard = CharacterStub({ magic: 0, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(125);
      });

      test('with an even magic', () => {
         const wizard = CharacterStub({ magic: 26, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(450);
      });

      test('with an odd magic', () => {
         const wizard = CharacterStub({ magic: 57, class: CharacterClass.WIZARD });
         const damages = computeDamages(125, wizard);
         expect(damages).toBe(837);
      });
   });
});
