describe('user taht fill out value form ', () => {
 before(() => {
   cy.visit('/')
   cy.get('input[value=weigh]').type(55)
   cy.get('input[value=height').type(1.71)
   cy.get('input[id=submit-button').click()

 })
  
});