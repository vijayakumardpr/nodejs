// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     // response.write()
//     response.end(JSON.stringify({
//         name: "Vijayakumar",
//     }));
// })

// server.listen(3300)


const { area } = require('./circle')

console.log(area(5))