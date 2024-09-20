const http=require('http')

const server =http.createServer((request,respone)=>{
    respone.writeHead(200,{'content-text':'text/html'})
    respone.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>WELCOME</h1>
        
    </header>
</body>
</html>`)

    respone.end()
})

server.listen(9000,()=>{
    console.log("Server running on http://localhost:3000");
})