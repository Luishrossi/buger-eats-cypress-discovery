
// DEPOIS DE 'DESCRIBE' DEVE SER INSERIDO EM ASPAS SIMPLES O NOME DA SUITE DE TESTE
// IT É O CASO DE TESTE
describe('home page',()=> {
    it ('app deve estar online', ()=>{
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})