const http = require('http'); // pull in http module
// parsing url string
const url = require('url');
// parsing querystrings from url
const query = require('querystring');
// files I have made
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// hold the different url possiblitities
const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  '/success': jsonHandler.success,
  '/badRequest': jsonHandler.badRequest,
  '/unauthorized': jsonHandler.unauthorized,
  '/forbidden': jsonHandler.forbidden,
  '/internal': jsonHandler.internal,
  '/notImplemented': jsonHandler.notImplemented,
  '/notFound': jsonHandler.notFound,
  index: jsonHandler.notFound,
};

// when server gets a requesr
const onRequest = (request, response) => {
  // parse url into individual parts and return those
  const parsedUrl = url.parse(request.url);
  // store parameters for valid and logged in
  const params = query.parse(parsedUrl.query);

  // get the accepted types split
  const acceptedTypes = request.headers.accept.split(',');

  // do the proper thing for whichever url is passed in
  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](request, response, acceptedTypes, params);
  } else {
    urlStruct.index(request, response, acceptedTypes, params);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
