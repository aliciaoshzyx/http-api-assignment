
// send the response with a general format
const respond = (request, response, status, content, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(content);
  response.end();
};

// function for success code
const success = (request, response, acceptedTypes) => {
  // message to send
  const responseText = {
    message: 'This is a successful response',
    id: 'Success',
  };
  // if its xml
  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  // default to JSON
  const responseString = JSON.stringify(responseText);
  // send our json with a success status code
  return respond(request, response, 200, responseString, 'application/json');
};

// function to show a bad request with or without the correct parameters
const badRequest = (request, response, acceptedTypes, params) => {
  // message to send
  const responseText = {
    message: 'This request has the required parameters',
    id: 'Bad Request',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.valid || params.valid !== 'true') {
    // set our error message
    responseText.message = 'Missing valid query parameter set to true';
    // give the error a consistent id
    responseText.id = 'badRequest';
    // if its requested xml
    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> ${responseText.message}</message>`;
      responseXML = `${responseXML} <id> ${responseText.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 400, responseXML, 'text/xml');
    }
    // return with default JSON
    const responseString = JSON.stringify(responseText);
    return respond(request, response, 400, responseString, 'application/json');
  }

  // if it does have the right parameter and is xml
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  // default JSON
  const responseString = JSON.stringify(responseText);
  return respond(request, response, 200, responseString, 'application/json');
};

// function for unauthorized error
const unauthorized = (request, response, acceptedTypes, params) => {
  // message to send
  const responseText = {
    message: 'This request has the required parameters',
    id: 'Unauthorized',
  };

  // if the request does not contain a valid=true query parameter
  if (!params.loggedIn || params.loggedIn !== 'yes') {
    // set our error message
    responseText.message = 'Missing loggedIn query parameter set to yes';
    // give the error a consistent id
    responseText.id = 'unauthorized';
    // if its requested xml
    if (acceptedTypes[0] === 'text/xml') {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message> ${responseText.message}</message>`;
      responseXML = `${responseXML} <id> ${responseText.id}</id>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 401, responseXML, 'text/xml');
    }
    // return with default JSON
    const responseString = JSON.stringify(responseText);
    return respond(request, response, 401, responseString, 'application/json');
  }

  // if it does have the right parameter and is xml
  if (acceptedTypes[0] === 'text/xml') {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 200, responseXML, 'text/xml');
  }

  // default JSON
  const responseString = JSON.stringify(responseText);
  return respond(request, response, 200, responseString, 'application/json');
};

// function for forbidden code
const forbidden = (request, response, acceptedTypes) => {
  // message to send
  const responseText = {
    message: 'You do not have access to this content',
    id: 'Forbidden',
  };
  // if its xml
  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 403, responseXML, 'text/xml');
  }

  // default to JSON
  const responseString = JSON.stringify(responseText);
  // send our json with a success status code
  return respond(request, response, 403, responseString, 'application/json');
};

// function for internall error code
const internal = (request, response, acceptedTypes) => {
  // message to send
  const responseText = {
    message: 'Internal server error, something went wrong',
    id: 'Internal Error',
  };
  // if its xml
  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 500, responseXML, 'text/xml');
  }

  // default to JSON
  const responseString = JSON.stringify(responseText);
  // send our json with a success status code
  return respond(request, response, 500, responseString, 'application/json');
};

// function for notImplemented
const notImplemented = (request, response, acceptedTypes) => {
  // message to send
  const responseText = {
    message: 'A get request for this page has not been implemented yet. Check later',
    id: 'Not Implemented',
  };
  // if its xml
  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 501, responseXML, 'text/xml');
  }

  // default to JSON
  const responseString = JSON.stringify(responseText);
  // send our json with a success status code
  return respond(request, response, 501, responseString, 'application/json');
};

// function to show not found error
const notFound = (request, response, acceptedTypes) => {
  // error message with a description and consistent error id
  const responseText = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === 'text/xml') {
    // create a valid XML string
    let responseXML = '<response>';
    responseXML = `${responseXML} <message> ${responseText.message}</message>`;
    responseXML = `${responseXML} <id> ${responseText.id}</id>`;
    responseXML = `${responseXML} </response>`;
    return respond(request, response, 404, responseXML, 'text/xml');
  }
  const responseString = JSON.stringify(responseText);
  // return our json with a 404 not found error code
  return respond(request, response, 404, responseString, 'application/json');
};

// exports to set functions to public.
// In this syntax, you can do getIndex:getIndex, but if they
// are the same name, you can short handle to just getIndex,
module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,

};
