describe('User that navigates to the application', () => {

  before(() => {
    cy.visit('/')
  });
  
  it('is expected to see "BMI Calculator"',()=>{
    cy.get('h1').should('contain.text','BMI Calculator')
  })
});