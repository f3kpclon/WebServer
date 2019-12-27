const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});

    const ejemplo = {
        "nombre": "Félix",
        "edad" : 35,
        "url": req.url
    }

    res.write(JSON.stringify(ejemplo))
    //res.write('hola Mundo');
    res.end();
})
.listen(8080)

console.log('escuchando');

