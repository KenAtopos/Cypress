/// <reference types="cypress" />

describe("interacting with input field", () => {
  it.skip("click on input field", () => {
    cy.visit("https://google.com");
    cy.get("#W0wltc > .QS5gu").click();
    cy.get('[role="combobox"]').click();
    // const searchDropdownBefore = cy.get(".erkvQe > .OBMEnb");
    // searchDropdownBefore.should("be.visible").contains("Trending searches");
    cy.get(".erkvQe > .OBMEnb").as("searchDropdown"); // alias
    cy.get("@searchDropdown")
      .should("be.visible")
      .contains("Trending searches");
    // cy.get("#hplogo").click();
    // cy.get(".erkvQe > .OBMEnb").should("not.be.visible");
  });

  it("type cypress in the search input", () => {
    cy.visit("https://google.com");
    cy.get("#W0wltc > .QS5gu").click();
    cy.get('[role="combobox"]').type("cypress{enter}", { delay: 200 });

    // const list = ".erkvQe > .OBMEnb > ul";
    // cy.get(list).find("li").eq(1).contains("cypress tree").click();
  });
});
