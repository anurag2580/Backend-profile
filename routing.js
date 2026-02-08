const http = require('http');
const app = http.createServer((req,res) => {
    if(req.url === '/home'){
        res.write(`hello World`)
        return res.end()
    }else if (req.url === '/about'){
        res.write(`About US Page`)
        return res.end()
    }else if (req.url === '/contact'){
        res.write(`Contact Page`)
        return res.end()
    }
    else if (req.url === '/admin'){
        res.write(`Admin  Page`)
        return res.end()
    }else if (req.url === '/user'){
        res.write(`User Page`)
        return res.end()
    }
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Routing</title>
</head>
<body>
    <header>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/admin">Admin</a>
        <a href="/user">User</a>
    </header>
    
</body>
</html>`); 
return res.end()
})
const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Nodejs Server is Running: http://localhost:${PORT}`)
})