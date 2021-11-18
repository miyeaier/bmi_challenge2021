describe('user fills out the BMI form ', () => {

  describe('all the right values needed', () => {
    before(() => {
      cy.visit('/')
      cy.get('input[name=weight]').type('55')
      cy.get('input[name=height').type('171')
      cy.get('input[id=submit-button').click()
    });

    it('is expected to see the BMI calculated on the page', () => {
      cy.get('div[id=return-message]').should('contain.text', "18.81").should('contain.text', 'Normal weight');
    })


    describe('with empty weight', () => {

      before(() => {
        cy.visit('/');
        cy.get('input[name=height]').type('175');
        cy.get('input[id=submit-button]').click();
      });


      it('is expected to see an empty weight ', () => {

        cy.get('div[id=return-message]').should('contain.text', 'HEY,YOU NEED TO GIVE US YOUR WEIGHT')
      });
    })
  })
  describe('with empty height', () => {

    before(() => {
      cy.visit('/');
      cy.get('input[name=weight]').type('55');
      cy.get('input[id=submit-button]').click();
    })

    it('is expected to see an empty height ', () => {

      cy.get('div[id=return-message]').should('contain.text', 'HEY,YOU NEED TO GIVE US YOUR HEIGHT')
    });
  })
})