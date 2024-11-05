// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFile: 'test-results/report.html' }]],
  // Other configurations like projects, timeout, etc.
  workers: 4, // Number of parallel workers (adjust as needed)
  testDir: './tests', // Directory where test files are located
});
