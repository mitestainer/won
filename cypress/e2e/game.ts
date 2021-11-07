/// <reference path="../support/index.d.ts" />

describe('Game page', () => {
  before(() => {
    cy.visit('/game/saint-kotar')
  })

  it('should render game page sections', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /saint kotar/i }).should('exist')
      cy.findByText(/^You can support the developer by purchasing/i).should('exist')
      cy.findByText('$550.59').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findAllByText('Red Martyr Entertainment').should('have.lengthOf', 2)
      cy.findByText(/oct 26, 2021/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Adventure / Mystery / Point-and-click').should('exist')
    })

    cy.shouldRenderShowcase({ name: 'Upcoming Games' })
    cy.shouldRenderShowcase({ name: 'You may like these games', highlight: false })
  });

  it('should add/remove game to cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).first().should('have.text', '1').click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /saint kotar/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).first().click()

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).should('not.exist')
  });
});
