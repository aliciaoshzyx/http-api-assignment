const fs = require('fs');  
const index = fs.readFileSync(`${__dirname}/../client/client.html`);


const respond = (request, response, status, content, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};
 
//Takes request, response and an array of client requested mime types
const success = (request, response, acceptedTypes) => {
  
  //is xml, then respond xml instead
  if (acceptedTypes[0] === 'text/xml') {
	//create a valid XML string with name and age tags.
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> This was a successful response </message>`;
    responseXML = `${responseXML} </response>`;    

	//return response passing out string and content type
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  const responseJSON = {
      message: 'This was a successful response'
  }
  
  //return response passing json and content type
  return respond(request, response, 200, responseJSON, 'application/json');
};

const badRequest = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> This was a bad request </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 400, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'This was a bad request'
    }
    
    //return response passing json and content type
    return respond(request, response,400, responseJSON, 'application/json');
  };

const unauthorized = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> Unauthorized </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 401, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'Unauthorized'
    }
    
    //return response passing json and content type
    return respond(request, response, 401, responseJSON, 'application/json');
  };

const forbidden = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> Forbidden </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 403, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'Forbidden'
    }
    
    //return response passing json and content type
    return respond(request, response, 403, responseJSON, 'application/json');
  };

  const internal = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> Internal Error </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 500, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'Internal Error'
    }
    
    //return response passing json and content type
    return respond(request, response, 500, responseJSON, 'application/json');
  };

  const notImplemented = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> This is not implemented </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 501, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'This is not implemented'
    }
    
    //return response passing json and content type
    return respond(request, response, 501, responseJSON, 'application/json');
  };

  const notFound = (request, response, acceptedTypes) => {
    
    //is xml, then respond xml instead
    if (acceptedTypes[0] === 'text/xml') {
      //create a valid XML string with name and age tags.
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> Page not found </message>`;
      responseXML = `${responseXML} </response>`;    
  
      //return response passing out string and content type
      return respond(request, response, 404, responseXML, 'text/xml');
    }
  
    const responseJSON = {
        message: 'Page not found'
    }
    
    //return response passing json and content type
    return respond(request, response, 404, responseJSON, 'application/json');
  };
//exports to set functions to public.
//In this syntax, you can do getCats:getCats, but if they
//are the same name, you can short handle to just getCats,
module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden, 
  internal,
  notImplemented, 
  notFound
};