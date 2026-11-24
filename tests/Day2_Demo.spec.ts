// Get By Role== when elemenet is actionable then go for it

import { test , expect, Locator} from "@playwright/test"
/*
test( " Navigate to Locator" , async ({page}) =>
{
await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
// get By role
//page.getByRole('role', { accessibleName: 'value' })
const project=page.getByRole('link' , {name : "Projects"})
await expect (project).toBeVisible()

})
*/

//  GATE BY TEXT
/*
test( " Navigate to Locator" , async ({page}) =>
{
await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")

// page.getByText('text')
const text = page.getByText("Welcome, John! 👋")
await expect (text).toBeVisible()

})
*/
//  gate by label

/*
test("navigate to label",async({page}) =>
{


await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
const email = page.getByLabel('Email Address');
const label:Locator=page.getByLabel('First Name')
await expect (label).toBeVisible()
await label.fill("Amol Kharat")

await expect(email).toBeVisible();
await email.fill('abkharat01@getMaxListeners.com');
await page.waitForTimeout(5000)
})
*/
// 4. Gate by placeHolder
/*
test("navigate to chrome", async ({page}) =>
{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const placeHolder=page.getByPlaceholder("Search tests...")
    await placeHolder.fill("data")
    await expect (placeHolder).toBeVisible()
})

//5. Gate by Title
/*
test("navigate to chrome", async ({page}) =>
{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const totalRuns = page.getByTitle('Total test runs');

console.log(await totalRuns.innerText());
await expect (totalRuns).toHaveText("4,821Total Runs") //return all text
await expect (totalRuns).toContaintext("4,821")  // partial text to be checked
await expect (totalRuns).toBeVisible()
})
*/
// 6. getByAltText
/*
test("navigate to chrome", async ({page}) =>
{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const alttext = page.getByAltText("Playwright logo")

await expect (alttext).toBeVisible()
})
*/

// 7. getByTextId
test("navigate to chrome", async ({page}) =>
{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app#")
    const textid = page.getByTestId("product-card-starter")
    await textid.click()

await expect (textid).toBeEnabled()
})
