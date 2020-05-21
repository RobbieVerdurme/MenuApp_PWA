/* eslint-disable no-undef */
describe('Find menu with filter', () => {
  // Find menu
  it('FindMenu', () => {
    cy.visit('/')
    cy.get('#bottom-bar-item-list').click()
    cy.wait(124)
    cy.get('input').click().type('Test').type('{enter}')
    cy.get('.md-list-item').should('have.length', 0)
  })
})
