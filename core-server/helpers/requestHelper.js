class requestHelper {
  constructor() {}
}

requestHelper.getMessage = function (code) {
  var status = new Object();
  status["200"] = "Success";
  status["201"] = "Created";
  status["202"] = "Accepted";
  status["203"] = "Non-Authoritative Information";
  status["204"] = "No Content";
  status["205"] = "Reset Content";
  status["206"] = "Partial Content";
  status["400"] = "Bad Request";
  status["401"] = "Unauthorized";
  status["402"] = "Payment Required";
  status["403"] = "Forbidden";
  status["404"] = "Not Found";
  status["405"] = "Method Not Allowed";
  status["406"] = "Not Acceptable";
  status["407"] = "Proxy Authentication Required";
  status["408"] = "Request Timeout";
  status["409"] = "Conflict";
  status["410"] = "Gone";
  status["411"] = "Length Required";
  status["412"] = "Precondition Failed";
  status["413"] = "Request Entity Too Large";
  status["414"] = "Request-URI Too Long";
  status["415"] = "Unsupported Media Type";
  status["416"] = "Requested Range Not Satisfiable";
  status["417"] = "Expectation Failed";
  status["500"] = "Internal Server Error";
  status["501"] = "Not Implemented";
  status["502"] = "Bad Gateway";
  status["503"] = "Service Unavailable";
  status["504"] = "Gateway Timeout";
  status["505"] = "HTTP Version Not Supported";
  status["509"] = "Bandwidth Limit Exceeded";
  return status[code];
};

const DEFAULT_ERROR = "Some error has occurred. Please try again.";

requestHelper.sendSuccessResponse = function (req, res, data) {
  this.sendResponse(req, res, 200, false, data, false);
};

requestHelper.sendErrorResponse = function (req, res, errors) {
  this.sendResponse(req, res, 400, false, false, errors);
};

requestHelper.formatError = function (
  code,
  detail,
  message = "",
  displayMessage = ""
) {
  var error = {};
  if (!message) {
    message = requestHelper.getMessage(code)
      ? requestHelper.getMessage(code)
      : DEFAULT_ERROR;
  }
  error.code = code;
  error.detail = detail;
  error.message = message;
  error.displayMessage = displayMessage;
  return error;
};

requestHelper.sendResponse = function (
  req,
  res,
  status,
  message,
  data,
  errors
) {
  var response = new Object();

  if (status) {
    response.status = status;
    response.message = this.getMessage(status);
  }
  if (message) {
    response.message = message;
  }
  if (data) {
    response.data = data;
  }
  if (errors) {
    if (typeof errors === "string") {
      error = this.formatError("B2C400", "error", errors);
      errors = new Array(error);
    }
    if (errors instanceof Error) {
      error = this.formatError("ERR500", "error", "", errors.stack);
      errors = new Array(error);
    }
    response.errors = errors;
  }
  if (response.errors) {
    if (response.errors instanceof Array) {
      for (var i = 0; i < response.errors.length; i++) {
        if (response.errors[i] && !response.errors[i].displayMessage) {
          if (config.showDefaultErrorMessage) {
            response.errors[i].displayMessage = DEFAULT_ERROR;
          } else {
            response.errors[i].displayMessage = response.errors[i].message;
          }
        }
      }
    } else {
      if (response.errors && !response.errors.displayMessage) {
        response.errors.displayMessage = response.errors.message;
      }
    }
  }
  res.status(status).send(response);
};

module.exports = requestHelper;
