/// <reference types="cypress" />

describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true);
  });
});

describe('DevTest server', () => {
  it('is operational', () => {
    cy.visit('/');
  });
});

describe('Rendered stylished component', () => {
  it('has a background-color of red', () => {
    const red = 'red';
    // const red = 'rgb(255, 0, 0)';
    cy.viewport(550, 750)
      .get('button')
      .contains('cypress')
      .should('have.css', 'background-color', red);
  });
  it('has a working hover selector', () => {
    let alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get('button')
      .contains('cypress')
      .trigger('mouseover')
      .then( () => expect(alerted).to.match(/cypress/));
  });
  it('has a working media query', () => {
    const blue = 'rgb(0, 0, 255)'
    cy.viewport(499, 750)
      .get('button')
      .contains('cypress')
      .should('have.css', 'background-color', blue);
  });
});
