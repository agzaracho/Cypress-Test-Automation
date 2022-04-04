import indexPage from "../../support/pages/indexPage";
import searchResultPage from "../../support/pages/searchResultPage";
import productPage from "../../support/pages/productPage";
import filterPage from "../../support/pages/filterPage";
import cardFinancingOptionsPage from "../../support/pages/cardFinancingOptionsPage";
import checkOutPage from "../../support/pages/checkOutPage";

describe('Connectis - Cypress cases', function(){
    Cypress.on('uncaught:exception', (err) => {
        return false;
      })
    beforeEach(function()  {
        cy.fixture('data').then(function(data)
        {
            this.data=data ;
        })
        cy.visit('/');
        //cy.screenshot();
    }) 
    
/*      it("CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52",function(){
        indexPage.search(this.data.modelToSearch);
        searchResultPage.verifySearch(this.data.modelToSearch);
        searchResultPage.goFirstMatch(this.data.modelToSearch);
        productPage.verifyProduct(this.data.modelToSearch);
        cy.screenshot()
        productPage.verifyInstallments(this.data.installments);
        }) 

    it("CP002 - Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB",function(){
        filterPage.rollOutFilterOptions();
        filterPage.selectFilterOption(this.data.filter, this.data.filterValue);
        filterPage.rollOutFilterOptions();
        filterPage.selectFilterOption(this.data.filter2, this.data.filterValue2);
        filterPage.rollOutFilterOptions();
        filterPage.verifyFilterResult(2);
        filterPage.verifyAppliedFilters();
        }) 

   it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', function(){
        indexPage.selectProduct(2)
        productPage.viewInstallmentsOption();
        cardFinancingOptionsPage.selectBank('Credicoop');   
        cardFinancingOptionsPage.selectCard('Visa');
        cardFinancingOptionsPage.verifyMaxAmountPays(60);
        cy.screenshot('#modal-content-17');
    })
    
    it('CP004 - Añadir producto al carrito de compras', function(){
        indexPage.selectProduct(0)
        productPage.addProdToCart();
        checkOutPage.verifyBanner(); 
        cy.screenshot()      
    })*/

        it('CP005 - Quitar Producto del carrito de compras', function(){
        indexPage.selectProduct(0)
        productPage.addProdToCart();
        checkOutPage.deleteProduct();
        cy.screenshot();
    })
/*         it('CP006 - Quitar Producto del carrito de compras', function(){
        cy.visit('https://tienda.movistar.com.ar')
        indexPage.selectProduct(0)
        productPage.addProdToCart();
        checkOutPage.deleteProduct()
    }) */
})
