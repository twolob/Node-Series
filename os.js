const os = require('os')

// Platform

console.log('Platfrom: ', os.platform())

// Architecture
console.log('Architecture: ', os.arch())

// CPU details

console.log('CPU Info: ', os.cpus())




// Total memory
console.log('Total memory: ', os.totalmem() / (1024 * 1024), ' MB')

// Free memory
console.log('Free memory: ', os.freemem() / (1024 * 1024), ' MB')
