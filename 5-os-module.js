const os = require('os');

// info abt current user
const users = os.userInfo()

// method returs thesystem uptime in seconds
// note seconds are in 100 interval not 60

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);