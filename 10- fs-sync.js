const { readFileSync, writeFileSync, readFile } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/sync-result.txt',
    `Here is the yumigo : ${first}, ${second} `
)
