/// <reference types="cypress" />
//import { AppComponent } from "./src/app/app.component"

describe("Homepage test", () =>{
    it("Should visit the home page", () => {
       cy.visit("http://localhost:4200/")
       //cy.on('uncaught:exception', (err, runnable) => { return false; })
       //cy.get("#operatins").should('have.text', 'Perimeter')
       cy.get('mat-select')
    })
})