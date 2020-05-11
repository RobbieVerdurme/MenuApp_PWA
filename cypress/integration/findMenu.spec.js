/* eslint-disable no-undef */
describe('Find menu with filter', () => {
  // login
  beforeEach(() => {
    cy.login()
  })

  // Find menu
  it('FindMenu', () => {
    cy.visit('/')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
      body: { idToken: localStorage.getItem('token') }
    })
    cy.get('#bottom-bar-item-list').click()
    cy.get('input').type('Test').type('{enter}')
    cy.get('.md-list-item').should('have.length', 0)
  })
})
