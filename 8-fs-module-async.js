const { readFile, writeFile } = require('fs');
// const fs = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }// if u want to read files sync then do this
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
        const second = result
        writeFile('./content/result-async.txt', `Here is the results of ${first} , ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})
