class searchResultPage{
    
    constructor(){
        this.banner = '.base';
        this.products = '[class=product-item-info]';
    }

    verifySearch = () => {
        cy.get(this.banner)
    }

    goFirstMatch = (string) => {
        cy.get(this.products).first().click();
    }
}
export default new searchResultPage();