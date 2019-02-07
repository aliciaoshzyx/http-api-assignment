const fs = require('fs'); // pull in the file system module

// Load index and css fully into memory.
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

// function to handle the index page
const getIndex = (request, response) => {
  // set status code (200 success) and content type
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // write an HTML string or buffer to the response
  response.write(index);
  // send the response to the client.
  response.end();
};

// hanlde the css page
const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

// exports for other files
module.exports = {
  getIndex,
  getCSS,
};
