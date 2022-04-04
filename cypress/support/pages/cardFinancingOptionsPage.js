class cardFinancingOptionsPage{

    constructor(){
        this.BankBox = '#selectBank';
        this.CarBox = '#selectCardByBank';
        this.maxAmountPaysCell = '#bodyTable tr:last td:first'; 
    }

    selectBank = (bank) => {
        cy.get(this.BankBox).select(bank)
    }

    selectCard = (card) => {
        cy.get(this.CarBox).select(card)
    }

    verifyMaxAmountPays = (max) => {
        cy.get(this.maxAmountPaysCell).should('not.have.text', max);
    }
}
export default new cardFinancingOptionsPage();