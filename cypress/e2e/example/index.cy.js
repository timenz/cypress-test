/// <reference types="cypress" />


describe('test navigasi website gsmarena.com', () => { // Test scope
  it.skip('Able to view product detail', () => { // Test scenario
    
    cy.visit('https://www.gsmarena.com/') // step-step to test the scenario
    cy.get('a[href="samsung-phones-9.php"]').click()
    cy.get('#review-body ul li:first-child a').click()

    cy.get('.specs-phone-name-title').should('be.visible') // assertion, validation the scenario, its success or fail
  })
  it ('Able to search product', () => {
    cy.visit('https://www.gsmarena.com/')
    cy.get('input#topsearch-text').type('moto')
    cy.get('div.phone-results ul li:first-child a').click()
    cy.get('.specs-phone-name-title').should('be.visible')
  })
})