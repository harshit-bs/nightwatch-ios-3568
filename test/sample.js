describe('Ecosia.org Demo', function() {

  before(browser => {
    browser
      .navigateTo('http://localhost:8000/page.html');
  });

  it('Demo test ecosia.org', function(browser) {
    const inputElement = element('#input');

    browser
    .expect.element(inputElement).to.have.attribute('value').to.equal('item 1');
  });

  after(browser => browser.end());
});
