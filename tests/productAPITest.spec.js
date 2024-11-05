import { test, expect } from '@playwright/test';
import { extractTokens, getAuthToken, getGuestToken } from '../helper/authHelper.js'; // Updated imports
import { ORDER_URL, ROUTINES_TAB_SLUG, PRODUCT_V2, ROUTINE_URL, HOME_PAGE_SLUG } from '../config/config.js';

test.beforeAll(async ({ request }) => {
  await extractTokens(request); // Extract tokens before all tests
});

// Test the routine preview page
test('routine page get request', async ({ request }) => {
  const authToken = getAuthToken();
  const response = await request.get(`${ROUTINE_URL}/pre-bridal-glow-up-challenge-21-days`, {
    headers: {
      'x-auth-token': authToken, // Pass the token in the x-auth-token header
    },
  });
  const responseBody = await response.json();
  console.log(response.status());
  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('data.id');
  expect(responseBody).toHaveProperty('data.type');
});

// Test the order page API
test('order history page get request', async ({ request }) => {
  const authToken = getAuthToken();
  const response = await request.get(ORDER_URL, {
    headers: {
      'x-auth-token': authToken, // Pass the token in the x-auth-token header
    },
  });
  expect(response.status()).toBe(200);
});

// Test the routines page API
test('all routine page get request', async ({ request }) => {
  const guestToken = getGuestToken();
  const response = await request.get(ROUTINES_TAB_SLUG, {
    headers: {
      'x-guest-token': guestToken, // Use guest token here
    },
  });
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('type');
  expect(responseBody).toHaveProperty('slug');
  expect(responseBody).toHaveProperty('objects');
  expect(responseBody.objects).not.toBe('');
});

// Test product page API response
test('product page API', async ({ request }) => {
  const authToken = getAuthToken();
  const response = await request.get(`${PRODUCT_V2}/deconstruct-exfoliating-body-wash-11-aha-2-bha-200-ml.json?show_special_offer=true`);
  const responseBody = await response.json();
  expect(response.status()).toBe(200);
  expect(responseBody).toHaveProperty('type');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('name');
});


