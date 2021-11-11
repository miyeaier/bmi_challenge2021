describe('user taht fill out value form ', () => {
 before(() => {
   cy.visit('/')
   cy.get('input[value=Weigh]').type(55)
   cy.get('input[value=height').type(1.71)
   cy.get('input[id=submit-button').click()

 });
  it('is expected to see BMI Calulator on page', () => {
    cy.get('div[id=confirmation-message]').should('contain.text','Inpout you Height and weight!')
    
  });
  
});