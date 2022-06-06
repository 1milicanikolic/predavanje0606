/// <reference types= "Cypress" />
import { loginPage } from '../page_objects/loginPage';
describe('login POM', () => {
    let validEmail = "user1EM@user.com"
    let validPassword = "user1PASS"

    before('visit login page', () => {
        cy.visit('/')
        loginPage.loginBtn.click();
    })
//    it ('valid login', () => {
//        loginPage.emailInput.type(validEmail);
//        loginPage.passwordInput.type(validPassword);
//        loginPage.submitBtn.click();
//    })
    it ('valid login', () => {
        cy.url().should('include', '/login')
        loginPage.login(validEmail, validPassword);
        cy.url().should('not.include', '/login')
    })
})