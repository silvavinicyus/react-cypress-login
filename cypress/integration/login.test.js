describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Form div should be visible', () => {
        cy.get(".login-box").should('be.visible');
    });

    it('Should be able to login', () => {
        cy.get(".email").type("admin@compal.com.br")
        cy.get(".password").type("123456");
        cy.get("button").click();
        cy.get(".home-box").should("be.visible");
    });

    it('Should not be able to login with wrong email', () => {
        cy.get(".email").type("admin1@compal.com.br")
        cy.get(".password").type("123456");
        cy.get("button").click();
        cy.get(".login-box").should('be.visible');
    });

    it('Should not be able to login with wrong password', () => {
        cy.get(".email").type("admin@compal.com.br")
        cy.get(".password").type("123457");
        cy.get("button").click();
        cy.get(".login-box").should('be.visible');
    });

    it('Should throw new error toast when credentials are wrong', () => {
        cy.get(".email").type("admin@compal.com.br")
        cy.get(".password").type("123457");
        cy.get("button").click();
        cy.get(".login-box").should('be.visible').and('include.text', 'Email ou senha incorretos!');
    })
});