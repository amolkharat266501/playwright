import { test , expect, Locator} from "@playwright/test"

test( " Hidden dropdown" , async ({page}) =>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// enter Username
await page.locator("input[name='username']").fill("Admin")
// Enter password
await page.locator("input[type='password']").fill("admin123")
// click on login button
await page.locator("button[type='submit']").click()

// const pimtext = page.getByText('PIM', { exact: true });

//     await expect(pimtext.first()).toBeVisible();

//     await pimtext.first().click();

await expect(page.getByRole('link',{name :'PIM'})).toBeVisible()

await page.getByRole('link',{name :'PIM'}).click()
const jobtitleDropdown= page.locator("div[class='oxd-select-text-input']").nth(2)
await jobtitleDropdown.click()

// Check whether values inside dropdown  (ctl+shift+P)-focus page
const jobTitlevalues=page.locator("div[role='listbox'] span")
await expect(jobTitlevalues.first()).toBeVisible()
const titlecount= await jobTitlevalues.count()
console.log("job Title values", titlecount)
// Print all dropdown values
// const values = await jobTitlevalues.allTextContents();
// console.log("Job Title values:", values);


for (let i=0; i<titlecount;i++){
   const jobTitle= jobTitlevalues.nth(i)
   const test1= await jobTitle.textContent()
   console.log(test1)

   if (test1=='Account Assistant'){
    await jobTitle.click()
    break;
   }
}
})