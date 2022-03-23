
class Page {
    
    async open (path) {
        await browser.url(path)
    }
    get title() {
        return $('title');
    }
    get header() {
        return $('.navbar');
    }
    get headerTitle() {
        return this.header.$('.navbar-brand');
    }
    get pageTitle() {
        return $('h3');
    }
    get navigation() {
        return $$('.nav-link')
    }
    async navigateTo(item){
        await $(`//a[text()='${item}']`).click();
    }
}

module.exports = { Page: new Page() };