import {test,expect} from "@playwright/test"

test("Test case1:DyanmicWebTable Handaling",async ({page})=>{

    await page.goto("https://sdetqa.vercel.app/autoplay")

    const tableRow= await page.locator("#taskTable tbody tr").all()
     expect(tableRow.length).toBeGreaterThan(0)
     //console.log(tableRow)
     //to find Chrome CPU utilazation value
     let cpuload;
     for(let row of tableRow){
        const productname= await row.locator('td').nth(0).innerText()
        if(productname== "Chrome"){
            cpuload= await row.locator('td',{hasText:"%"}).innerText()
             const expectedcpuload= await page.locator('strong.chrome-cpu').innerText()
         expect(cpuload).toBe(expectedcpuload)
        }
     }
     console.log(cpuload)
})

test.only("Test case2:DyanmicWebTable Handaling",async ({page})=>{

    await page.goto("https://sdetqa.vercel.app/autoplay")
     const tableRow= await page.locator("#taskTable tbody tr").all()
     expect(tableRow.length).toBeGreaterThan(0)
     let Memory;
     for(let row of tableRow){
        const productname= await row.locator('td').nth(0).innerText()
        if(productname== "System"){
            Memory= await row.locator('td',{hasText:/MB$/}).innerText()
            expect(Memory).toContain('MB')
        }
        console.log(productname)
     }
     console.log(Memory)
     //console.log(productname)

})