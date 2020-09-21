// Importing puppeteer
const puppeteer = require("puppeteer")

// This wrapper means immediately execute this code
void (async () => {
  // wraper to catch errors
  try {
    // create a new browser instance
    const browser = await puppeteer.launch()

    // create a page inside the browser
    const page = await browser .newPage()

    // navigate to a website
    await page.goto('https://scrapethissite.com/pages/forms')

    // take a screenshot
    // and save it
    await page.screenshot({
      path: './data/screenshots/page1.png'
    })

    // generate a pdf of the page and save it
    await page.pdf({path: './data/pdfs/page1.pdf'})

    // all done close the browser
    await browser.close()
  } catch (error) {
    // if something goes wrong
    // display message
    console.log(error)
  }
})()
