import { getGreeting, getSubtitle, getTable } from '../support/app.po';

describe('world-bank', () => {
  beforeEach(() => cy.visit('/'));

  context('WHEN: user visits the Home', () => {

    it('should display welcome message', () => {
      getGreeting().contains('Welcome to world-bank!');
    });
    it('should display a subtitle of each subpage', () => {
      getSubtitle();
    });
    it('should display a table with the information', () => {
      getTable();
    });

  })

});

