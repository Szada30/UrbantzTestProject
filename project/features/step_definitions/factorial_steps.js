const { I, factorialPage } = inject();
// Add in your custom step files

Given('I am on the Factorial Calculator page', () => {
  I.amOnPage('/');
});

When('I calculate the factorial of {int}', (number) => {
  factorialPage.calculateFactorial(number);
});

Then('the result I see is {int}', (result) => {
  I.see(result, factorialPage.fields.result);
});