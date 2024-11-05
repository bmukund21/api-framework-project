import { expect } from '@playwright/test';
import { VERIFY_OTP } from '../config/config.js';

// Declare the token variables (initially undefined)
let authToken;
let guestToken;

// Function to extract tokens from the login API
export async function extractTokens(request) {
  const response = await request.post(VERIFY_OTP, {
    data: {
      user: {
        phone_number: '+913699004991',
        otp: '1319',
      },
    },
  });

  // Ensure the response status is 200
  
  const responseBody = await response.json();

  // Extract and store the auth and guest tokens
  authToken = responseBody.user.auth_token;
  guestToken = responseBody.user.guest_token;

  console.log('Auth Token:', authToken);
  console.log('Guest Token:', guestToken);
}

// Functions to retrieve the tokens
export function getAuthToken() {
  if (!authToken) {
    throw new Error('Auth Token has not been set yet.');
  }
  return authToken;
}

export function getGuestToken() {
  if (!guestToken) {
    throw new Error('Guest Token has not been set yet.');
  }
  return guestToken;
}
