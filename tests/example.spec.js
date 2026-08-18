// @ts-check
import { test, expect } from '@playwright/test';


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });



// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('verify page title',async ({page})=>
// {

//   await page.goto('https://www.facebook.com/l');
//   await expect(page).toHaveTitle('Facebook');
// }
// );











// test('Verify Get Started', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// }
// );


// test('Verify text using getByText()',async({page})=>
// {
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByText('Playwright enables reliable web automation for testing, scripting, and AI agents.')).toBeVisible();


// }
// );


// test('Verify text using getByRole()',async({page})=>
// {
//   await page.goto('https://playwright.dev/');
//   await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();


// }
// );

// test('Verify Login using getByPlaceholder locator',async({page})=>
// {
//   await page.goto('https://opensource-demo.orangehrmlive.com/');
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button' ,{name:'Login'}).click();
// await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
// await expect(page.getByText('Dashboard')).toBeVisible();

// }
// );


// test('Verify Login',async ({page})=>
// {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.getByRole('button',{name:'Login'}).click();
//   //await page.getByText('Login').click();
// await expect(page.getByText('Swag Labs')).toBeVisible();
// }
// )


// test('Verify CheckBox is checked or not ',async({page})=>
// {
//   await page.goto('https://opensource-demo.orangehrmlive.com/');
//   await page.getByPlaceholder('Username').fill('Admin');
//  await page.getByPlaceholder('Password').fill('admin123');
// await page.getByRole('button' ,{name:'Login'}).click();
//   await page.getByRole('link',{name:'Admin'}).click();

//   // Locate the table row containing the text "Hansaha" and check its checkbox
//   const row1 = page.getByRole('row', { name: /Risabh/ });
//  // await row1.getByRole('checkbox').check();

//  //await page.getByRole('checkbox').nth(2).click();

//  await row1.locator('span.oxd-checkbox-input').click();
//  await expect(row1.getByRole('checkbox')).toBeChecked();


//   await row1.locator('span.oxd-checkbox-input').uncheck();
//   await expect(row1.getByRole('checkbox')).not.toBeChecked();



// }
// )




// test('Verify select drodown with select html tag',async({page})=>
// {

//   await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
// await page.getByRole('combobox').selectOption('Algeria');
// await page.pause();
// }
// );


// test('Verify custome dropdown value selection ',async({page})=>
// {
//   await page.goto('https://opensource-demo.orangehrmlive.com/');
//   await page.getByPlaceholder('Username').fill('Admin');
//  await page.getByPlaceholder('Password').fill('admin123');
// await page.getByRole('button' ,{name:'Login'}).click();
//   await page.getByRole('link',{name:'Admin'}).click();
//   await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
//   await page.getByRole('listbox').getByText('ESS').click();

//     const userRole = page.locator('.oxd-select-text').first();

//     await expect(userRole).toContainText('ESS');
//  await page.pause();

//   }
// )



// test('Verify hover ', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/');
//   await page.getByPlaceholder('Username').fill('Admin');
//   await page.getByPlaceholder('Password').fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Admin' }).hover();
//   await page.pause();

// }
// )



test('Verify doubleclcik ', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/mouse-event/');
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await expect(page.getByText('Double Click Detected ✅')).toBeVisible();
  await page.pause();
 

}
)


