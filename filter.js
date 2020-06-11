const {childrenAge, mailList} = require('./data')

function childrenAge2to11 ( element, index, array) {
    if (element >= 2 && element <= 11) return true;
        return false;
    
}


const childrenFiltered = childrenAge.filter(
    element => element >= 2 && element <= 11
)

console.log (childrenFiltered);

const filteredMails = mailList.filter (
    mail => mail.includes ("@rocketseat.com"));

console.log (filteredMails);