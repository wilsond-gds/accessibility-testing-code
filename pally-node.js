// the address we want to check
const checkAddress = 'https://www.the-race.com/';

// We can check for errors or errors and notices:
// it's worth adding the notices as the automated
// checker can't catch everything

const includeNoticeToggle = 'true';

const pa11y = require('pa11y');

pa11y(checkAddress, {
    includeNotices: includeNoticeToggle
}).then((results) => {
    let totalNotices = 0;
    let totalErrors = 0;
    //console.log(results);
    results.issues.forEach(issue=>{
       if(issue.type==='notice'){totalNotices++;}
       if(issue.type==='error'){totalErrors++;}
    })
    console.log(`For the URI ${checkAddress} there were ${totalErrors} errors and ${totalNotices} warnings or notices.`)
});