// does not use express
const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case "/":
        path+= "index.html";
        res.statusCode = 200;
        break;
    case "/contact":
        path+= "contact.html";
        res.statusCode = 200;
        break
    case "/contact-us":
        // redirect status code to '/contact' page
        res.statusCode = 301;
        res.setHeader('Location', '/contact');
        break;
    
    default:
        path+= "404.html";
        res.statusCode = 404;
        break;
  }

  fs.readFile(path, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    }else{
        res.end(data);
    }
  });
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})