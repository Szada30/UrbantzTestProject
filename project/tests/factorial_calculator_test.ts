import { readJsonToDataTable } from '../util/data_reader';
import { generateLongString } from '../util/long_string_generator';

Feature('Factorial Calculator');

const { I, factorialPage } = inject();

// Scenario('Factorial page appearance', ({ I, factorialPage }) => {
//     I.amOnPage('/');
//     I.seeElement(factorialPage.fields.input);
//     I.seeElement(factorialPage.fields.result);
//     I.seeElement(factorialPage.links.terms);
//     I.seeElement(factorialPage.links.privacy);
//     I.seeElement(factorialPage.links.qx2f);
//     I.seeElement('.//title[text()="Factorial"]');
// });

// Scenario('Terms and Services link', ({ I, factorialPage }) => {
//     I.amOnPage('/');
//     I.click(factorialPage.links.terms);
//     I.seeInCurrentUrl('/terms');
//     I.see('This is the terms and conditions document. We are not yet ready with it. Stay tuned!');
// });

// Scenario('Privacy link', ({ I, factorialPage }) => {
//     I.amOnPage('/');
//     I.click(factorialPage.links.privacy);
//     I.seeInCurrentUrl('/privacy');
//     I.see('This is the privacy document. We are not yet ready with it. Stay tuned!');
// });

// Scenario('Qxf2 Services link', ({ I, factorialPage }) => {
//     I.amOnPage('/');
//     I.click(factorialPage.links.qx2f);
//     I.seeInCurrentUrl('https://qxf2.com/');
//     I.see('QA for startups');
// });

// let naturalNumbers = readJsonToDataTable(['number', 'result'], 'project/data_tables/ui/natural_numbers.json');
// Data(naturalNumbers).Scenario('Calculate natural factorials', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.number);
//     I.see(current.result, factorialPage.fields.result);
// });

// let integerNumbers = readJsonToDataTable(['number', 'result'], 'project/data_tables/ui/integer_numbers.json');
// Data(integerNumbers).Scenario('Calculate integer factorials', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.number);
//     I.see(current.result, factorialPage.fields.result);
// });

// let floatNumbers = readJsonToDataTable(['number', 'result'], 'project/data_tables/ui/float_numbers.json');
// Data(floatNumbers).Scenario('Calculate floating-point factorials', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.number);
//     I.see(current.result, factorialPage.fields.result);
// });

// let characters = readJsonToDataTable(['character', 'result'], 'project/data_tables/ui/characters.json');
// Data(characters).Scenario('Calculate character factorials', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.character);
//     I.see(current.result, factorialPage.fields.result);
// });

// let parseIntNumbers = readJsonToDataTable(['number', 'result'], 'project/data_tables/ui/parse_int_numbers.json');
// Data(parseIntNumbers).Scenario('"parseInt" handling', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.number);
//     I.see(current.result, factorialPage.fields.result);
// });

// let longStrings = new DataTable(['number', 'result']);
// longStrings.add([generateLongString(1000, '0'), '1']);
// longStrings.add([generateLongString(1000, '1'), '1']);
// longStrings.add([generateLongString(1000, '10'), '3628800']);
// Data(longStrings).Scenario('Calculate long input factorials', ({ I, factorialPage, current }) => {
//     I.amOnPage('/');
//     factorialPage.calculateFactorial(current.number);
//     I.see(current.result, factorialPage.fields.result);
// });

