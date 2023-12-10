import { newComputerPage } from './page-objects/newComputerPage'
import { computersListPage } from './page-objects/computersListPage'

Cypress.Commands.add('addComputerUI', ({ ...details }) => {
  cy.session([details], () => {
    cy.visit('/new')
    cy.get(newComputerPage.name).type(details.name)
    cy.get(newComputerPage.introduced).type(details.introduced)
    cy.get(newComputerPage.discontinued).type(details.discontinued)
    cy.get(newComputerPage.company).select(details.company)
    cy.contains('Create this computer').click()

    cy.get(computersListPage.computersFound).should(
      'contain.text',
      'computers found',
    )
  })
})
