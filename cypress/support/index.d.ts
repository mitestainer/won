/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
