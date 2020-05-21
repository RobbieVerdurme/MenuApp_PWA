/* eslint-disable no-undef */
describe('getMenuInfo', () => {
  // Get menu
  it('GetMenu', () => {
    cy.visit('/')
    cy.get('#bottom-bar-item-list').click()
    cy.get('.md-list-item').first().click()
  })
})
