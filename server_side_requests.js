const http = require('http'); 
const hostname = '127.0.0.1'; 
const port = 3000; 
const server = http.createServer((req, res) => { 
res.setHeader("Content-type", "application/json"); 
res.setHeader("Access-Control-Allow-Origin", "*"); 
res.statusCode = 200; 
let dataObject = [ 
{ id: 5, name : "fibre", email: "lreneck.org" }, 
{ id: 1, name : "Astine Banda", email: "bsc-ne-40-15" }, 
{ id: 2, name : "Astine Banda", email: "bsc-ne-40-15" }, 
{ id: 3, name : "Astine Banda", email: "bsc-ne-40-15" }, 
{ id: 4, name : "Astine Banda", email: "bsc-ne-40-15" }, 
{ id: 5, name : "Astine Banda", email: "bsc-ne-40-15" }]; // dataObject.forEach((item) => { 
// console.log('ID: ' + item.id); 
// }); 
let data = JSON.stringify(dataObject); 
console.log("listen to the port 1234") 
res.end(data); 
}); 
server.listen(port, hostname, () => { 
console.log(`Server running at http://${hostname}:${port}/`); });



