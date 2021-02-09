import { assert } from 'chai';
import { readJsonToDataTable } from '../util/data_reader';

Feature('Factorial REST');

const { I } = inject();

let positiveTestNumbers = readJsonToDataTable(['number', 'result'], 'project/data_tables/rest/positive.json');
Data(positiveTestNumbers).Scenario('Factorial calculator REST positive test', async ({ I, current }) => {
    let response = await I.sendPostRequest('/factorial', "number=" + current.number);
    assert(response.status === 200, "Status is not 200! Status recieved: " + response.status);
    assert(response.data.answer === current.result, "Incorrect calculation! Number recieved: " + response.data.answer);
});

let negativeTestNumbers = readJsonToDataTable(['number'], 'project/data_tables/rest/negative.json');
Data(negativeTestNumbers).Scenario('Factorial calculator REST negative', async ({ I, current }) => {
    let response = await I.sendPostRequest('/factorial', "number=" + current.number);
    assert(response.status === 500, "Status is not 500! Status recieved: " + response.status);
});