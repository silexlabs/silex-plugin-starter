import client from './client';
import { test } from '@jest/globals';

test('client', () => {
  expect(client).toBeDefined();
});
