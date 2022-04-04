class productPage{

    constructor(){
        this.installmentsOptionBtn = '#open-installments-modal';
        this.buyBtn = '#movistar-pdp-addtocart-button';
    }

    verifyProduct = (string) => {
        cy.get('.base').should('contain', string);
    }

    verifyInstallments = (int) => {
        cy.get('.price-installments > p > [display="inline"]').should('contain', 'Hasta '+int+' cuotas')
    }

    viewInstallmentsOption = () => {
        cy.get(this.installmentsOptionBtn).click();
    }

    addProdToCart = () => {
        cy.get(this.buyBtn).click();
        cy.url().should('include', '/checkout/cart/');
    } 
}
export default new productPage();