// Importing puppeteer
const puppeteer = require("puppeteer")
const fs = require("fs")

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

    // grab team data
    const teams = await page.evaluate(() => {
      // a helper function for some slight code reuse
      // grab the TD, the text and remove trailing whitespace
      const grabFromRow = (row, classname) => row
        .querySelector(`td.${classname}`)
        .innerText
        .trim()

      // our selectors
      const TEAM_ROW_SELECTOR = 'tr.team'

      // we'll store our data in an array of objects
      const data = []

      // get all the team rows
      const teamRows = document.querySelectorAll(TEAM_ROW_SELECTOR)

      // loop over the team row, creating objects
      for (const tr of teamRows) {
        data.push({
          name: grabFromRow(tr, 'name'),
          year: grabFromRow(tr, 'year'),
          wins: grabFromRow(tr, 'wins'),
          losses: grabFromRow(tr, 'losses')
        })
      }

      // send back the data into the team variable
      return data
    })

    // log the data for testing purposes
    console.log(JSON.stringify(teams, null, 2))

    // save data to JSON
    fs.writeFile(
      './data/json/team.json',
      JSON.stringify(teams, null, 2), // optional params to format it nicely
      (err) => err ? console.log('Data not written!', err) : console.log('Data Written!')
    )

    // all done close the browser
    await browser.close()
  } catch (error) {
    // if something goes wrong
    // display message
    console.log(error)
  }
})()
