// ---- here creating server and printing hello word ---- //
const http = require('http');
const app = http.createServer((req,res) => {
  // --- WRITING CONTENT HEAD --- //
  res.writeHead({'Content -Type ':'text/plain'});
  // --- HELLO WORLD ---//
  res.end(`<h1>hello world</h1>`)
});
const PORT = 4000 ;
app.listen(PORT,() =>{
    console.log(`server runing at Port: http://localhost:${PORT}`)
})