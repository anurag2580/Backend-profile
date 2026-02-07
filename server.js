// TO CREATE/START SIMPLE SERVER //
// FOR THAT WE ----- IMPORT HTTP ------- // 
const http = require('http');
// CREATE THER SERVER //
const Server = http.createServer((req, res) => {
    // --- CREATING SIMPLE RESPONSE --- //
    console.log(req);
})
// ---- PORT NUM ---- //
const PORT = 4000;
// ---- SERVER RUNNING MESSAGES ----- //
Server.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})

// ---- HTTP METHOD : GET , POST , PUT , PATCH & DELETE -----  //

