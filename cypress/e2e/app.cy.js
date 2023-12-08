describe("App", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("it load the app", () => {
        const counter = cy.get('h1')
        counter.should('contain', 0)
    })

})