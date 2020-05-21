/* eslint-disable no-undef */
describe('AddMenuTest', () => {
  // login
  beforeEach(() => {
    cy.login()
  })

  // add menu
  it('AddMenu', () => {
    cy.visit('/')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
      body: { idToken: localStorage.getItem('token') }
    })
    cy.get('#bottom-bar-item-list').click()
    cy.wait(100)
    cy.get('.md-fab').click()

    // MENUINFO
    cy.get('#menuTitle').type('Testmenu')
    cy.get('#menuDescription').type('Testmenu for 4 persons')

    // MENU INGREDIENDS
    cy.get('a[href*="ingredients"]').click()
    cy.get('#ingredientName').type('Testingredient')
    cy.get('#ingredientQuantity').type('5')
    cy.get('.md-menu > .md-icon-font').click()
    cy.get('.md-list-item-text').contains('Kilo').click()
    // cy.get('#ingredientMesurement').select('Kilo')
    // click add ingredient
    cy.get('.md-icon-button').click()

    // MENU PREPERATIONS
    cy.get('a[href*="make"]').click()
    cy.get('textarea').type('This is how you make the food')

    // SAVE MENU
    cy.get('.md-fab').click()
  })
})
