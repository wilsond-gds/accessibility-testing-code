
const checkAddress = 'https://www.gov.uk/';

const pa11y = require('pa11y');

pa11y(checkAddress, {
    includeNotices: true
}).then((results) => {
    // Do something with the results
    console.log(results.issues.length);
    //console.log(results);
});