/* eslint-disable no-undef */
describe('LoginTest', () => {
  it('Login', () => {
    cy.visit('/')
    cy.get('#bottom-bar-item-profile').click()
    cy.get('#email').type('robbieverdurme@telenet.be')
    cy.get('#password').type('159874236COD')
    cy.get('#login').click()
  })
})
