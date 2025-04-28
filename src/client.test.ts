import client from './client';
import { test, expect } from '@jest/globals';

test('client', () => {
  expect(client).toBeDefined();
});
