// https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-axe-core-and-pa11y
const pageTest = require('pa11y');
import {expect, jest, test} from '@jest/globals';
describe('Home page', () => {
    it('should have no PA11Y issues', async () => {
        const results = await pageTest('http://localhost:8080', {
            runners: [
                'axe',
                'htmlcs'
            ]
        })
        console.log('************');
        console.log(results.issues.length);
        console.log(results);
        expect(results.issues.length).to.equal(0)
    })
})