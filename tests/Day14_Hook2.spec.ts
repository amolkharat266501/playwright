/*
open app ----beforeAll()

login ---beforeEach()
find product
logout ----afterEach()

login
add product to cart
logout

close app ----afterAll()
*/

import{test,expect,Page} from "@playwright/test"

let page :Page
test.beforeAll('Open the app', async ({browser})=>{

    page= await browser.newPage()
    await page.goto("https://www.demoblaze.com/")

})
test.afterAll("close the app", async ()=>{
    await page.close()
})

test.beforeEach("", async ({})=>{
    await page.locator("#login2").click()
    // UserName......
    let userName= await page.locator("#loginusername").fill("amol12345")
    // Password......
    const pass= await page.locator("#loginpassword").fill("123456789")

    // Login button *****

    const loginButton= await page.getByRole("button",{name:'Log in'}).click()
    await page.waitForTimeout(2000)
})

test.afterEach("Logout the app", async()=>{
    await page.locator("#logout2").click()
})

test("Find The Number of Products", async()=>{
    const products=  page.locator("#tbodyid .hrefch")
    const count= await products.count()
    console.log("The number of product ",count)
    await expect(products).toHaveCount(9)
})

test("Add product to the cart ", async ()=>{
     await page.getByText("Samsung galaxy s6").first().click();

// handaling alert before click
page.once("dialog",async(dialog)=>{

    expect(dialog.message()).toContain('Product added')
    await dialog.accept()
})
    await page.getByText("Add to cart").click()
})