class RegisterPage {
    get registerBtn() {
        return cy.get('.nav-link').eq(2);
    }

    get firstNameInput() {
        return cy.get('#first-name')
    }

    get lastNameInput() {
        return cy.get('#last-name')
    }

    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get passwordInputConf() {
        return cy.get('#password-confirmation')
    }


    get termsCheckbox() {
        return cy.get('.form-check-input');
    }

    get submitBtn() {
        return cy.get('[type = submit]');
    }

    register (firstName, lastName, email, password) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.passwordInputConf.type(password);
        this.termsCheckbox.check();
        this.submitBtn.click();
    }

}

export const registerPage = new RegisterPage();