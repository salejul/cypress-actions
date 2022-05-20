describe('Demo Test', () => {
  it('Should login into an application', () => {
    cy.visitLoginpage()
    cy.waitForSeconds(5)

    cy.fixture('loginData').then(({ username, password }) => {
      //initialize test
      cy.login(username, password)
    })
  })
})
