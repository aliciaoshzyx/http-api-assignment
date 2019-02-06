const http = require('http');
const jsonHandler = require('./jsonResponses.js');
const htmlHandler = require('./htmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/' : htmlHandler.getIndex,
    '/success':jsonHandler.success,
    '/badRequest': jsonHandler.badRequest
}
const onRequest = (request, response) => {
    //console.log(request.url);
  
   
};

http.createServer(onRequest).listen(port);
