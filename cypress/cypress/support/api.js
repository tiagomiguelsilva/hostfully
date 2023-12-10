const API_URL = Cypress.env('apiUrl')

Cypress.Commands.add('createComputer', ({ ...details }) => {
  cy.request({
    method: 'POST',
    failOnStatusCode: false,
    url: `${API_URL}/computers`,
    body: {
      name: details.name,
      introduced: details.introduced,
      discontinued: details.discontinued,
      company: details.company,
    },
  })
})
