class filterPage{
    
    constructor(){
        this.filterBtn = '#layered-filter-block > .block-title > strong';            
    }

    rollOutFilterOptions = () => {
        cy.get(this.filterBtn).click();
    }

    selectFilterOption = (atribute, value) => {
        cy.get('[attribute="'+atribute+'"] > .filter-options-content > .items').contains(value).click();

        cy.intercept({
            method: "POST"
          }).as("dataGetFirst");
        cy.wait("@dataGetFirst");

        cy.url().should('include', '/?'+atribute+'=');
    }

    verifyAppliedFilters = ()=>{
        cy.get(this.filterBtn).click();
        cy.screenshot();
    }

    verifyFilterResult = (int) => {
        cy.get('.toolbar-number').should('have.text', int);
        cy.screenshot();
    }  
}
export default new filterPage();