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



// test('Verify doubleclcik ', async ({ page }) => {
//   await page.goto('https://vinothqaacademy.com/mouse-event/');
//   await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
//   await expect(page.getByText('Double Click Detected ✅')).toBeVisible();
//   await page.pause();


// }
// )

// test('Verify Login using enter key',async({page})=>
// {
// await page.goto('https://www.saucedemo.com/');
// await page.getByPlaceholder('Username').fill('standard_user');
// const password= page.getByPlaceholder('Password');
// await password.fill('secret_sauce');
// await password.press('Enter');
// await expect(page.getByText('Swag Labs')).toBeVisible();
// await page.pause();
// }
// );




// test('Verify tab key',async({page})=>
// {
// await page.goto('https://www.saucedemo.com/');
// const username= page.getByPlaceholder('Username');
// await username.fill('standard_user');
// await username.press('Tab');
//  const password= page.getByPlaceholder('Password');
// await password.fill('secret_sauce');
// await password.press('Enter');
// await expect(page.getByText('Swag Labs')).toBeVisible();
// await page.pause();
// }
// );




// test('Verify Escape key closes dropdown',async({page})=>
// {
//   await page.goto('https://opensource-demo.orangehrmlive.com/');
//   await page.getByPlaceholder('Username').fill('Admin');
//  await page.getByPlaceholder('Password').fill('admin123');
// await page.getByRole('button' ,{name:'Login'}).click();
//   await page.getByRole('link',{name:'Admin'}).click();
//   const dropdown= page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow');
//   await dropdown.first().click();
//   await page.keyboard.press('Escape');
//   await expect(page.getByRole('listbox')).not.toBeVisible();
//  await page.pause();

//   }
// )

// test('Verify native dropdown selection', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByPlaceholder('Username').fill('standard_user');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   await page.getByRole('button', { name: 'Login' }).click();
//   const dropdown = page.locator('select');
//   //selectByvalue concept
//   // await dropdown.selectOption('Price (low to high)');
//   //SelectByLabel Concept
//   //await dropdown.selectOption({label :'Price (high to low)'});
//   //Select By Index concept
//   await dropdown.selectOption({ index: 1 });
//   await page.pause();


// })


// test('Verify native dropdown selection when multiple dropdown present in a single page', async ({ page }) => {


//   //using id 
//   // await page.goto('https://practice.expandtesting.com/dropdown');
//   // const simpleDropdown=page.locator('#dropdown');
//   // await simpleDropdown.selectOption('Option 2');
//   // const countrySelectionDropdown = page.locator('#country');
//   // await countrySelectionDropdown.selectOption({ index: 5 });

//   //using getbylablel
//     // await page.goto('https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com');
//     // const dropdown=page.getByLabel('Country:');
//     // await dropdown.selectOption('canada');
//     // await expect(dropdown).toHaveValue('canada');


//   //using nth()
//   // await page.goto('https://practice.expandtesting.com/dropdown');
//   // const dropdown=page.locator('select');
//   // await dropdown.nth(0).selectOption('Option 1');
//   // await dropdown.nth(1).selectOption({label :'20'});
//   // await dropdown.nth(2).selectOption({index :4});

//   // await page.pause();


// })


// test('Verify right clcik ', async ({ page }) => {
//   await page.goto('https://vinothqaacademy.com/mouse-event/');

//   /* using locator variable concept
//   await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
//   await expect(page.getByText('Edit')).toBeVisible();
// */

// /*using nth() process
// const but =  page.locator('button');
// await but.nth(4).click({button :'right'});
// await expect(page.getByText('Edit')).toBeVisible();
// }
// */
// );


// test('verify Ctrl+A select all functionality',async({page})=>
// {
//   await page.goto('https://www.saucedemo.com/');
//   const usernamefield=page.getByPlaceholder('Username')
//   await usernamefield.fill('standard_user')
//   await usernamefield.press('Control+A');
//   await usernamefield.fill('problem_user');
//   await expect(usernamefield).toHaveValue('problem_user');
//   await page.pause();



// }
// );


// test('verify Ctrl+A+Backspace select all functionality',async({page})=>
// {
//   await page.goto('https://www.saucedemo.com/');
//   const usernamefield=page.getByPlaceholder('Username')
//   await usernamefield.fill('standard_user')
//   await usernamefield.press('Control+A');
//   await usernamefield.press('Backspace');
//   await expect(usernamefield).toHaveValue('');
//   await page.pause();



// }
// );


// test('verify copy paste functionality',async({page})=>
// {
//   await page.goto('https://www.saucedemo.com/');
//   const usernamefield=page.getByPlaceholder('Username')
//   const passwordfield=page.getByPlaceholder('Password')
//   await usernamefield.fill('standard_user');
//   await usernamefield.press('Control+A');
//   await usernamefield.press('Control+C');
//   await passwordfield.click();
//   await passwordfield.press('Control+V');
//   await expect(passwordfield).toHaveValue('standard_user');
//   await page.pause();



// }
// );


// test('Verify radio button selection',async({page})=>
// {
//   await page.goto('https://practice.expandtesting.com/radio-buttons');
//   const favoriteColorRadioButton=page.getByRole('radio',{name:'yellow'});
//   await favoriteColorRadioButton.check();
//   await expect(favoriteColorRadioButton).toBeChecked();
//     const favoriteSportRadioButton=page.getByRole('radio',{name:'football'});
//   await favoriteSportRadioButton.check();
//   await expect(favoriteSportRadioButton).toBeChecked();




// }
// );


// test('Verify radio button group selection',async({page})=>
// {
//   await page.goto('https://practice.expandtesting.com/radio-buttons');
//   const yellowColorRadioButton=page.getByRole('radio',{name:'yellow'});
//   await yellowColorRadioButton.check();
//   await expect(yellowColorRadioButton).toBeChecked();

//   const  redColorRadioButton=page.getByRole('radio',{name:'red'});
//   await redColorRadioButton.check();
//   await expect(redColorRadioButton).toBeChecked();

//  await expect(yellowColorRadioButton).not.toBeChecked();




// }
// );



test('Verify check the checkbox and Uncheck the checkbox ', async ({ page }) => {

  await page.goto('https://www.qapractice.com/practice-different-ui-elements');

  // verify single checkbox
  const singcheckbox = page.getByTestId('ui-single-checkbox');
  await singcheckbox.check();
  await expect(singcheckbox).toBeChecked();
  await singcheckbox.uncheck();
  await expect(singcheckbox).not.toBeChecked();
  await page.pause();

  //verify select multiple checkbox
  const multiplecheckboxoption1 = page.getByTestId('ui-checkbox-option1');
  await multiplecheckboxoption1.check();
  await expect(multiplecheckboxoption1).toBeChecked();
  const multiplecheckboxoption2 = page.getByTestId('ui-checkbox-option2');
  await multiplecheckboxoption2.check();
  await expect(multiplecheckboxoption2).toBeChecked();
  const multiplecheckboxoption3 = page.getByTestId('ui-checkbox-option3');
  await multiplecheckboxoption3.check();
  await expect(multiplecheckboxoption3).toBeChecked();

  await multiplecheckboxoption1.uncheck();
  await expect(multiplecheckboxoption1).not.toBeChecked();
  await multiplecheckboxoption2.uncheck();
  await expect(multiplecheckboxoption2).not.toBeChecked();
  await multiplecheckboxoption3.uncheck();
  await expect(multiplecheckboxoption3).not.toBeChecked();
  await page.pause();


}
);