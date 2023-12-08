describe('comment', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("should be able to add a comment", () => {
        cy.get('#name-input').type('Tony')
        cy.get('#comment-input').type('Macaroni')
        // cy.get('#comment-form').submit()
        cy.get('#Post').click()

        const commentListItems = cy.get('#comment-list > li')
        commentListItems.should('have.length', 3)
    })

})