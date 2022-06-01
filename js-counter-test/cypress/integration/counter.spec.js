describe("example counter app", () => {
    beforeEach(() => {
        cy.visit('http://localhost:63342/js-counter-test/index.html?_ijt=n8aco7mtfbda2n9n90mu2s55ms&_ij_reload=RELOAD_ON_SAVE')
    })

    it("최초에 카운터 값을 0으로 보여준다.", () => {
        cy.get("#value").invoke("text").should("eq", "0")
    })
})