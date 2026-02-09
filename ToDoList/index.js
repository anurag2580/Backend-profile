const http = require("http");

const PORT = 8080;

const toDoList = ["Anurag Ra", "Anu Rai", "Vishal Rai", "Rajesh Rai"];

http.createServer((req, res) => {
    const { method, url } = req;
    if (url === "/todos") {
      if (method === 'GET') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
        res.end()
      } else if (method === 'POST') {
        let body = '';
        req.on("error",(err) => {
            console.error(err);
          }).on("data",(chunk) => {
            body += chunk;
            console.log("chunks :", chunk)
          }).on("end", () => {
            body = JSON.parse(body)
            console.log(body)
            let newdoList = toDoList
            newdoList.push(body.item)
          })
            res.writeHead(200);
            res.end();

      } else if (method === 'DELETE') {
        let body = '';
        req.on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          }).on("end", () => {
            body = JSON.parse(body)
            let deletethis = body.item
            for (let i = 0; i < toDoList.length; i++) {
              if (toDoList[i] === deletethis) {
                toDoList.splice(i, 1)
                break;
              }
            }
          })
        res.writeHead(200);
        res.end()
      }
    } else url === "/";
  })
  .listen(PORT, () => {
    console.log(`To Do list Running on PORT: http://localhost:${PORT}`);
  });
