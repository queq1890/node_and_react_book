const fs = require('fs')

fs.readFile('kakugen.txt', 'utf8', (err, data) => {
                          console.log(data)
})
