import { test, expect } from "@playwright/test"

const url = "https://sdetqa.vercel.app/autoplay"

test.beforeEach(async ({ page }) => {
    await page.goto(url)
})

test("Static table handle ", async ({ page }) => {

    const table = page.locator("table").first()
    const headercount = await table.locator("thead th").count()
    const header = table.locator("thead th")
    const row = table.locator('tbody tr')
    const rowCount = await table.locator('tbody tr').count()

    expect(headercount).toBe(5)
    expect(rowCount).toBe(4)

    for (let i = 0; i < rowCount; i++) {
        const rowtext = await row.nth(i).innerText()
       // console.log(rowtext)
    }
// const rows= await row.allInnerTexts()
// console.log(rows)
//     const headers = await header.allInnerTexts()
//     expect(header).toHaveText(['Product Name', 'Category', 'Price', 'Stock', 'Status'])
//     console.log(headers)

    // extract all table data excluding header
const datatable: string[][]=[]
for (let i = 0; i < rowCount; i++) {
        const cellvalue  = await row.nth(i).locator("td").allInnerTexts()
        datatable.push(cellvalue)}
        console.log(datatable[1])

        // Print all Product Name
        const productName=[]
        for (let i=0;i<datatable.length;i++){
productName.push(datatable[i][0])
        }
        console.log(productName)

        // Print product name where stock is zero
        const stock=[]
       for (let i=0;i<datatable.length;i++){
        if(datatable[i][3]=='0'){
            stock.push(datatable[i][0])
        }
       }
       console.log(stock)

       // Print product name where status is in stock
         const instock=[]
       for (let i=0;i<datatable.length;i++){
        if(datatable[i][4]=='In Stock'){
            instock.push(datatable[i][0])
        }
       }
console.log(instock)
console.log(datatable.length)

let total=0
for (let i=0;i<datatable.length;i++){
   total += Number(datatable[i][2].replace("$",""))

    }
    console.log("The total price is:", total)
})