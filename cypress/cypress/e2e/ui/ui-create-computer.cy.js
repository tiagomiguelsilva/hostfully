import { computersListPage } from '../../support/page-objects/computersListPage'
import { newComputerPage } from '../../support/page-objects/newComputerPage'

describe('Create Computer UI', () => {
  beforeEach(() => {
    cy.visit('/new')
  })

  // a scenario made for sessions reuse (as an example, not that its really useful in this project)
  it('add a new computer successfully', () => {
    const newComputer = {
      name: 'Testing New Computer Nintendo both fields',
      introduced: '1986-09-15',
      discontinued: '1994-09-17',
      company: 'Nintendo',
    }

    // making use of sessions
    cy.addComputerUI(newComputer)

    // if the platform was working, we'd now have a new computer added to our list
    cy.visit('/')
  })

  it('creating a new computer without a name should not work', () => {
    const details = {
      introduced: '1986-09-15',
      discontinued: '1994-09-17',
      company: 'Nintendo',
    }

    cy.get(newComputerPage.introduced).type(details.introduced)
    cy.get(newComputerPage.discontinued).type(details.discontinued)
    cy.get(newComputerPage.company).select(details.company)
    cy.contains('Create this computer').click()
    cy.get(newComputerPage.error).should('be.visible')
    // definitely this message should be improved!
    cy.get(newComputerPage.error).should(
      'contain.text',
      'Failed to refine type : Predicate isEmpty() did not fail.',
    )
  })

  it('creating a new computer successfully should show a successful message', () => {
    const details = {
      name: 'Testing New Computer Nintendo',
      introduced: '1986-09-15',
      discontinued: '1994-09-17',
      company: 'Nintendo',
    }

    cy.get(newComputerPage.name).type(details.name)
    cy.get(newComputerPage.introduced).type(details.introduced)
    cy.get(newComputerPage.discontinued).type(details.discontinued)
    cy.get(newComputerPage.company).select(details.company)
    cy.contains('Create this computer').click()

    cy.get(computersListPage.actionMessage).should('be.visible')
    cy.get(computersListPage.actionMessage).should(
      'have.text',
      `Done !  Computer ${details.name} has been created`,
    )
  })
})
