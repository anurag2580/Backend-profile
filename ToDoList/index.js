const http = require('http')

const PORT = 8080 ;

const toDoList = ["Anurag Ra","Anu Rai","Vishal Rai","Rajesh Rai"]

http.createServer((req,res)=> {
    const {method,url} = req;
    if(url === '/todos'){
       if(method === "GET"){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(toDoList.toString())
        res.end();
       }else{
        res.write(501)
       }
    }else(url === "/") ;

}).listen(PORT,()=>{
    console.log(`To Do list Running on PORT: http://localhost:${PORT}`)
})