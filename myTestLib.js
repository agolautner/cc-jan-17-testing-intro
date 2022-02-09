const check = (result, expected, testCaseDescription) => {
    // console.log(testCaseDescription);
    // if (result === expected) console.log('ok');
    // else console.log('error');
    console.log(`Result: ${result}, Expected: ${expected} --- ${testCaseDescription}, ${result === expected ? 'SUCCESS' : 'ERROR'}`);
}

module.exports = check;