/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  const username = 'robbieverdurme@telenet.be'
  const password = '159874236COD'

  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
    body: { email: username, password }
  }).then((res) => {
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
      body: { idToken: res.body.idToken }
    })
  })
})
