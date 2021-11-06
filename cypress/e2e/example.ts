/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to google.com', () => {
    cy.google()
  })

  it('should change light/dark theme on site', () => {
    cy.visit('https://willianjusten.com.br/')

    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.light').should('exist')

    cy.findByTitle(/mudar o tema/i).click()
    cy.get('.dark').should('exist')
  });
})
