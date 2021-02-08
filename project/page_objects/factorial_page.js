const { I } = inject();

module.exports = {

  fields: {
    input: '#number',
    result: '#resultDiv'
  },
  links: {
    terms: './/a[contains(text(), "Terms and Conditions")]',
    privacy: './/a[contains(text(), "Privacy")]',
    qx2f: './/a[contains(text(), "Qxf2 Services")]'
  },
  calculateButton: '#getFactorial',

  calculateFactorial(number) {
    I.fillField(this.fields.input, number);
    I.click(this.calculateButton);
  }

}
