/// <reference types="cypress" />
// load all the types, so that to gain the auto completion

describe("learn about the locators", () => {
  it("can locate a button on the page", () => {
    cy.visit("https://google.com");
    cy.get("#APjFqb", { timeout: 2000 })
      .should("be.visible")
      .and("have.id", "APjFqb")
      .and("have.value", "")
      .and("have.attr", "maxlength", "2048");
    // cy.get("input[name='q']");
    // cy.get("[name='q']"); // as it is attribute of an element
  });
});
