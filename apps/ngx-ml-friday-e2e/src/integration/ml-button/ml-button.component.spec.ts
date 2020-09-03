describe('ngx-ml-friday', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mlbuttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('nx-hybrid-demo-ml-button').should('exist');
  });
});
