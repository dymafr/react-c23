/// <reference types="cypress" />

describe('my first set of tests', () => {
  before(() => {
    cy.visit('/');
  });

  //   it('my first test', () => {
  //     cy.contains('h1', /list/);
  //     cy.findByText(/todo/i);
  //     cy.get('.container')
  //       .find('h1')
  //       .should('be.a', 'object')
  //       .and('have.class', 'mb-20')
  //       .and('have.css', 'background-color', 'rgb(255, 0, 0)')
  //       .and('have.attr', 'id', 'unid');

  //     cy.get('input').should('exist').get('h1').should('be.a', 'object');
  //   });

  //   it('my second test', () => {
  //     //     cy.get('input')
  //     //       .type('manger une pizza', { delay: 50 })
  //     //       .get('button')
  //     //       .first()
  //     //       .click();

  //     cy.wrap({ name: 'jean' }).its('name').should('equal', 'jean');
  //     cy.wrap({ name: () => 'jean' })
  //       .invoke('name')
  //       .should('eq', 'jean');

  //     const input = cy.get('input');
  //     input.wait(1000);
  //     input.clear();
  //   });

  it('my third test', () => {
    const inputs = cy.get('input');
    const checkbox = inputs.filter('[type="checkbox"]');
    checkbox.check().wait(500).uncheck();

    cy.get('select').select('2').wait(1000).select('3');
  });
});
