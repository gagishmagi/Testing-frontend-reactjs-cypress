// test('visit the react app', () => {
//     cy.
// })

describe('cypress', ()=>{
    it('it is should visit app',()=>{
        cy.visit('/')
    })
})

describe('Form', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('it focuses on the input', () =>{
        cy.focused().should('have.class','form-control')
    })

    it('accepts input', ()=>{
        const input = "Learing QA automation with Cypress"
        cy.get('.form-control')
          .type(input)
          .should('have.value', input)
    })

    it('should display list of dotos with 2 li\'s', () =>{
        cy.get('li')
          .should('have.length',2)
    })

    it('add a new todo to the list', () => {
        const input = "Learing QA automation with Cypress"
        cy.get('.form-control')
            .type(input)
            .type('{enter}')
            .get('li')
            .should('have.length', 3)
    })


    it('deletes a todo', () => {
        cy.get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('li')
          .should('have.length',1)
    })

    it.only('deletes all todo', () =>{
        cy.get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('li')
          .first()
          .find('.btn-danger')
          .click()
          .get('.no-task')
          .should('have.text', 'No task!')
    })


})


