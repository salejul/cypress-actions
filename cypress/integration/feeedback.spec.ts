describe('Feedback Test', () => {
  it('Should submit feedback form', () => {
    cy.visitFeedbackpage()

    cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
      //data from fixture file
      cy.submitFeedback(name, email, subject, message)
    })
  })
})
