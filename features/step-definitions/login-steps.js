const {Given, When, Then} = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page')
const HomePage = require('../pageobjects/home-page')
const CartPage = require('../pageobjects/cart-page')

Given('I am on the front page', async() => {
    await FrontPage.open()
})

When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password);
})

Then('I am successfully logged in with username {string}', async(username)=>{
    await HomePage.verifyLoginSuccess(username)
})

Then('I am logout from website', async() => {
    await HomePage.logout()
})


When('I add these items to cart:', async(table) => {
  let data = table.hashes()
  console.log(JSON.stringify(data))
  for(let i=0; i < data.length; i++){
    await HomePage.clickProductName(data[i].itemName)
    await CartPage.clickBtnAddToCart()
    await browser.pause(2000)
    await CartPage.clickOkAlert()
    await CartPage.clickBrowserBackBtn()
    await browser.pause(3000)
  }
})
