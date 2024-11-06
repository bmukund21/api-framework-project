// import { test, expect } from '@playwright/test';
// import { extractTokens, getAuthToken } from '../helper/authHelper.js'; // Updated imports
// import { HOME_PAGE_SLUG } from '../config/config.js';

// test.beforeAll(async ({ request }) => {
//   await extractTokens(request); // Extract tokens before the tests
// });

// // Test home page
// test('home page get request', async ({ request }) => {
//   const authToken = getAuthToken();  // Retrieve the auth token
//   const response = await request.get(HOME_PAGE_SLUG, {
//     headers: {
//       'x-auth-token': authToken,  // Pass the token in the x-auth-token header
//     },
//   });
//   const responseBody = await response.json();
  
//   // Log the response status and body
//   console.log('Response Status:', response.status());

//   expect(response.status()).toBe(200);
//   expect(responseBody).toHaveProperty('type');
//   expect(responseBody).toHaveProperty('slug');
// });
