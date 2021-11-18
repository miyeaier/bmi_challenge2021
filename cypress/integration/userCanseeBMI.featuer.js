describe('User that navigates to the application', () => {

  before(() => {
    cy.visit('/')
  });

  it('is expected to see title,input fields and placeholder ', () => {
    cy.get('h1').should('contain.text', 'BMI Calculator');
    cy.get('input[name=weight]').should("be.visible");
    cy.get('input[name=height]').should("be.visible");
    cy.get('input[id=submit-button]').should("be.visible").should('have.value', 'Calculate');

  })
});