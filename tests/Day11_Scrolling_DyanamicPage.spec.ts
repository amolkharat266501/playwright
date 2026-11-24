import{test,expect} from '@playwright/test'
let initialHeight=0
test("Scroll the page", async ({page})=>{
await page.goto("https://www.booksbykilo.in/children-books")
/*
while(true){
   await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))// scroll bottom of the page
await page.waitForTimeout(5000)

   const cuurentHeight= await page.evaluate(()=>
   {
return document.body.scrollHeight
   })

   if (initialHeight===cuurentHeight){
    break;
   }
   initialHeight=cuurentHeight
   console.log("End")

}
   */

})