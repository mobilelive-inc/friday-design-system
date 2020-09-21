describe('angular', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mlbuttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('fds-ml-button').should('exist');
  });
});
