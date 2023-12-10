const users = Cypress.env('testData')

describe('Create computer using API', () => {
  it('should be able to create a computer successfully with basic fields', () => {
    const newComputer = {
      name: 'Testing New Computer',
      company: 'IBM',
    }

    const request = cy.createComputer(newComputer)

    return request.then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.status).to.eq('success')
      expect(typeof response.body.data.newComputer.id).to.eq('number')
      expect(response.body.data.newComputer.name).to.eq(newComputer.name)
      expect(response.body.data.newComputer.company).to.eq(newComputer.company)
      expect(
        parseInt(response.body.data.newComputer.url.split('/').pop()),
      ).to.eq(response.body.data.newComputer.id)
    })
  })

  it('should be able to create a computer successfully with introduced', () => {
    const newComputer = {
      name: 'Testing New Computer Apple without discontinued fields',
      introduced: '1986-09-15',
      company: 'Apple',
    }

    const request = cy.createComputer(newComputer)

    return request.then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.status).to.eq('success')
      expect(typeof response.body.data.newComputer.id).to.eq('number')
      expect(response.body.data.newComputer.name).to.eq(newComputer.name)
      expect(response.body.data.newComputer.introduced).to.eq(
        newComputer.introduced,
      )
      expect(response.body.data.newComputer.discontinued).to.eq(
        newComputer.discontinued,
      )
      expect(response.body.data.newComputer.company).to.eq(newComputer.company)
      expect(
        parseInt(response.body.data.newComputer.url.split('/').pop()),
      ).to.eq(response.body.data.newComputer.id)
    })
  })

  it('should be able to create a computer successfully with discontinued', () => {
    const newComputer = {
      name: 'Testing New Computer Apple no introduced',
      discontinued: '1994-09-17',
      company: 'Apple',
    }

    const request = cy.createComputer(newComputer)

    return request.then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.status).to.eq('success')
      expect(typeof response.body.data.newComputer.id).to.eq('number')
      expect(response.body.data.newComputer.name).to.eq(newComputer.name)
      expect(response.body.data.newComputer.introduced).to.eq(
        newComputer.introduced,
      )
      expect(response.body.data.newComputer.discontinued).to.eq(
        newComputer.discontinued,
      )
      expect(response.body.data.newComputer.company).to.eq(newComputer.company)
      expect(
        parseInt(response.body.data.newComputer.url.split('/').pop()),
      ).to.eq(response.body.data.newComputer.id)
    })
  })

  it('should be able to create a computer successfully with introduced and discontinued', () => {
    const newComputer = {
      name: 'Testing New Computer Apple both fields',
      introduced: '1986-09-15',
      discontinued: '1994-09-17',
      company: 'Apple',
    }

    const request = cy.createComputer(newComputer)

    return request.then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.status).to.eq('success')
      expect(typeof response.body.data.newComputer.id).to.eq('number')
      expect(response.body.data.newComputer.name).to.eq(newComputer.name)
      expect(response.body.data.newComputer.introduced).to.eq(
        newComputer.introduced,
      )
      expect(response.body.data.newComputer.discontinued).to.eq(
        newComputer.discontinued,
      )
      expect(response.body.data.newComputer.company).to.eq(newComputer.company)
      expect(
        parseInt(response.body.data.newComputer.url.split('/').pop()),
      ).to.eq(response.body.data.newComputer.id)
    })
  })
})
