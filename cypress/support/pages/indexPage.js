class indexPage{

    constructor(){
        this.searchBox = '#search';
        this.searchBtn = '#search_mini_form';
        this.productList = '[class=product-item-info]';
    }

    search = (element) => {
        cy.get(this.searchBtn).click();
        cy.get(this.searchBox).type(element);
        cy.get(this.searchBtn).submit(); 
    }

    selectProduct = (index) => {
        cy.get(this.productList).eq(index).click()
    }
}
export default new indexPage();