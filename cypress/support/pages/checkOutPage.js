class checkOutPage{
   
    constructor(){
        this.productName = '.product-image-photo'
        this.banner = '.message > div'
        this.deleteBtn = '.actions-toolbar > .action'
        this.cartMsj = '.cart-empty > :nth-child(1)'
    }

    verifyBanner = () => {
        cy.get(this.productName)
        .should('have.attr', 'alt')
        .then(alttext => {
               cy.get(this.banner).should('have.text', 'Añadiste '+alttext+' a tu carrito de compras.')
      }); 
    }

    deleteProduct = () => {
        cy.get(this.deleteBtn).click()
        cy.get(this.cartMsj).should('have.text', 'No tienes ningún artículo en tu carrito de compras.')
    }
}
export default new checkOutPage();