/// <reference types= "Cypress" />
import { registerPage } from '../page_objects/registerPage';
describe('register POM', () => {
    let firstName = "user2"
    let lastName = "user2"
    let password = "user2PASS"

    before('visit register page', () => {
        cy.visit('/')
        registerPage.registerBtn.click();
    })

    it ('valid register', () => {
        cy.url().should('include', '/register')
        registerPage.register(firstName, lastName, email, password, password);
        cy.url().should('not.include', '/login')
        cy.wait(4000);
    })
})