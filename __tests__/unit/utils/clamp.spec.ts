import { clamp } from '../../../src/utils/clamp';

describe('clamp', () => {
   test('value inside the range', () => {
      const clamped = clamp(37, 20, 100);
      expect(clamped).toBe(37);
   });

   test('value lower than the minimum', () => {
      const clamped = clamp(17, 20, 100);
      expect(clamped).toBe(20);
   });

   test('value greater than the maximum', () => {
      const clamped = clamp(170, 20, 100);
      expect(clamped).toBe(100);
   });
});
