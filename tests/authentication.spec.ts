import { test, expect } from '@playwright/test';

describe('Authentication Test Plan', () => {
  // TC_LOGIN_001 - Valid Login
  test('TC_LOGIN_001 - Valid Login', async ({ page }) => {
    // Step 1: Navigate to login page
    await page.goto('/login');
    // Step 2: Enter username
    await page.fill('[data-test="username"]', process.env.USERNAME || '');
    // Step 3: Enter password
    await page.fill('[data-test="password"]', process.env.PASSWORD || '');
    // Step 4: Click login button
    await page.click('[data-test="login_button"]');
    // Step 5: Verify dashboard is visible
    await expect(page.locator('[data-test="dashboard"]')).toBeVisible();
  });

  // TC_LOGIN_002 - Invalid Password
  test('TC_LOGIN_002 - Invalid Password', async ({ page }) => {
    // Step 1: Navigate to login page
    await page.goto('/login');
    // Step 2: Enter username
    await page.fill('[data-test="username"]', process.env.USERNAME || '');
    // Step 3: Enter wrong password
    await page.fill('[data-test="password"]', 'wrong_password');
    // Step 4: Click login button
    await page.click('[data-test="login_button"]');
    // Step 5: Verify error message is visible
    await expect(page.locator('[data-test="error_message"]')).toBeVisible();
  });
});
