/// <reference types="cypress" />

describe('testing API For unit', () => {
    it('should return 200 as status response', () => {
        cy.request('GET', 'http://localhost:8000/units').then((response) => {
        expect(response.status).to.equal(200)
        })
        cy.request('GET', 'http://localhost:8000/figures').then((response) => {
        expect(response.status).to.equal(200)
        })
        cy.request('GET', 'http://localhost:8000/areaunits').then((response) => {
            expect(response.status).to.equal(200)
        })

        
    })  
})
