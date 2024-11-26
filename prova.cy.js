/// <reference = cypress>

describe("Testes da criação, registro de computador", () => {
    it("teste registro do computador com sucesso", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('#add').click()
        cy.get('#name').type("computador1")
        cy.get('#introduced').type("2020-11-26")
        cy.get('#discontinued').type("2024-11-20")
        cy.get('#company').select("Nokia")
        cy.get('.primary').click()
    })

    it("delete computador", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
        cy.get('#discontinued').type("2023-03-20")
        cy.get('.topRight > .btn').click({ force: true })
    })
  })