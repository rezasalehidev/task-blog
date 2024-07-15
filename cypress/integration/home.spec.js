describe("Home Page", () => {
    it("should display the blog title", () => {
        cy.visit("/");
        cy.contains("overreacted").should("be.visible");
    });
});
