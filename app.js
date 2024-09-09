const http = require('http');
const port = 4600;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const name = url.searchParams.get('name');

  if (!name) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(`Hello Purity`);
    return;
  }

  const now = new Date();
  const hour = now.getUTCHours();

  let salutation;

  if (hour >= 0o0 && hour < 12) {
    salutation = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    salutation = 'Good afternoon';
  } else {
    salutation = 'Good evening';
  }

  const response = `Hello, ${name}. ${salutation}. The time is ${now.toUTCString()}`;



  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(response);
});






server.listen(port, () =>{
  console.log(`Server is running at port ${port}`)
})