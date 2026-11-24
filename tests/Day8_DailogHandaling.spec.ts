import{test,expect} from "@playwright/test"

test("Alert handaling", async ({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

page.on("dialog",async dailog =>{
    console.log(dailog.message())
    await dailog.accept();

})
await page.getByRole("button", {name: 'Simple'}).click()

})

test("confirmAlert handaling", async ({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

page.on("dialog",async dailog =>{
    console.log(dailog.message())
    await dailog.accept();

})
await page.getByRole("button", {name: 'Confirm'}).click()

})
test("promt Alert handaling", async ({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

page.on("dialog",async dailog =>{
    console.log(dailog.message())
    await dailog.accept("AMOL KHARAT");

})
await page.getByRole("button", {name: 'Prompt'}).click()

})
test("Popup handaling", async ({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay")

page.on("dialog",async dailog =>{
    console.log(dailog.message())
    await dailog.accept("AMOL KHARAT");

})
await page.getByRole("button", {name: 'Popup'}).click()

})
