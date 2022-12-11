const Page = require('./page')

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    getProductNameLocator(itemName){
        return $(`//a[text()='${itemName}']`)
    }

    async clickProductName (itemName){
        await this.getProductNameLocator(itemName).click()
    }

    async logout(){
        await browser.pause(2000)
        await this.buttonLogout.click()
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

module.exports = new HomePage();