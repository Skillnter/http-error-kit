# Http Error Kit

A lightweight and flexible error handling utility for HTTP applications. This package provides structured error handling with customizable error formatting.

## Features
- Predefined HTTP error classes (e.g., `NotFoundError`, `BadRequestError`, `InternalServerErrorError`, etc.)
- Customizable error formatting
- Consistent error structure across applications
- Works seamlessly with TypeScript

## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Custom Error Formatting](#custom-error-formatting)
- [Error Kit Overview](#error-kit-overview)
  - [1. Kit General Error](#1-kit-general-error)
  - [2. Bad Request Error](#2-bad-request-error)
  - [3. Unauthorized Error](#3-unauthorized-error)
  - [4. Payment Required Error](#4-payment-required-error)
  - [5. Forbidden Error](#5-forbidden-error)
  - [6. Not Found Error](#6-not-found-error)
  - [7. Method Not Allowed Error](#7-method-not-allowed-error)
  - [8. Not Acceptable Error](#8-not-acceptable-error)
  - [9. Proxy Authentication Required Error](#9-proxy-authentication-required-error)
  - [10. Request Timeout Error](#10-request-timeout-error)
  - [11. Conflict Error](#11-conflict-error)
  - [12. Gone Error](#12-gone-error)
  - [13. Length Required Error](#13-length-required-error)
  - [14. Precondition Failed Error](#14-precondition-failed-error)
  - [15. Request Entity Too Large Error](#15-request-entity-too-large-error)
  - [16. Request-URI Too Long Error](#16-request-uri-too-long-error)
  - [17. Unsupported Media Type Error](#17-unsupported-media-type-error)
  - [18. Requested Range Not Satisfiable Error](#18-requested-range-not-satisfiable-error)
  - [19. Expectation Failed Error](#19-expectation-failed-error)
  - [20. I'm a teapot Error](#20-im-a-teapot-error)
  - [21. Insufficient Space on Resource Error](#21-insufficient-space-on-resource-error)
  - [22. Method Failure Error](#22-method-failure-error)
  - [23. Misdirected Request Error](#23-misdirected-request-error)
  - [24. Unprocessable Entity Error](#24-unprocessable-entity-error)
  - [25. Locked Error](#25-locked-error)
  - [26. Failed Dependency Error](#26-failed-dependency-error)
  - [27. Too Early Error](#27-too-early-error)
  - [28. Upgrade Required Error](#28-upgrade-required-error)
  - [29. Precondition Required Error](#29-precondition-required-error)
  - [30. Too Many Requests Error](#30-too-many-requests-error)
  - [31. Request Header Fields Too Large Error](#31-request-header-fields-too-large-error)
  - [32. Unavailable For Legal Reasons Error](#32-unavailable-for-legal-reasons-error)
  - [33. Internal Server Error](#33-internal-server-error)
  - [34. Not Implemented Error](#34-not-implemented-error)
  - [35. Bad Gateway Error](#35-bad-gateway-error)
  - [36. Service Unavailable Error](#36-service-unavailable-error)
  - [37. Gateway Timeout Error](#37-gateway-timeout-error)
  - [38. HTTP Version Not Supported Error](#38-http-version-not-supported-error)
  - [39. Variant Also Negotiates Error](#39-variant-also-negotiates-error)
  - [40. Insufficient Storage Error](#40-insufficient-storage-error)
  - [41. Loop Detected Error](#41-loop-detected-error)
  - [42. Not Extended Error](#42-not-extended-error)
  - [43. Network Authentication Required Error](#43-network-authentication-required-error)
  - [44. Kit Http Error](#44-kit-http-error)
- [People](#people)
- [Donations](#donations)
- [License](#license)

## Installation

```console
npm install http-error-kit
```

## Usage

```javascript
var { KitGeneralError } = require('http-error-kit');

console.log(new KitGeneralError(500, "Internal Server Error", { field: "email" }));
```

### Custom Error Formatting

```javascript
const formatter = (statusCode, message, details, ...args) => ({
    code: statusCode,
    msg: message,
    extra: details,
    traceId: args[0] || "default-trace-id"
});

const errorKit = new KitHttpError(400, "Bad Request", {}, formatter);
console.log(errorKit.BadRequestError("Invalid request", { field: "email" }, '0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a'));
/*  KitHttpError {
 *      code: 400,
 *      msg: "Invalid request",
 *      extra: {
 *          field: "email"
 *      },
 *      traceId: "0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a"
 *  }
 */
```

## Error Kit Overview

### 1. Kit General Error

Represents a general error with a status code, message, and optional details.

#### Parameters

- `statusCode` (`number`): The HTTP status code associated with the error (e.g., `500`).
- `message` (`string`): A human-readable error message. (e.g., `"Internal Server Error"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { KitGeneralError } = require('http-error-kit');

console.log(new KitGeneralError(500, "Internal Server Error", { field: "email" }));
/*  KitGeneralError {
 *      statusCode: 500,
 *      message: "Internal Server Error",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 2. Bad Request Error

Creates a new instance of the KitGeneralError class with a status code of 400, Bad Request.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 400. (e.g., `"Bad Request"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { BadRequestError } = require('http-error-kit');

console.log(new BadRequestError("Bad Request", { field: "email" }));
/*  BadRequestError {
 *      statusCode: 400,
 *      message: "Bad Request",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```


### 3. Unauthorized Error

Creates a new instance of the KitGeneralError class with a status code of 401, Unauthorized.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 401. (e.g., `"Unauthorized"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { UnauthorizedError } = require('http-error-kit');

console.log(new UnauthorizedError("Unauthorized", { field: "email" }));
/*  UnauthorizedError {
 *      statusCode: 401,
 *      message: "Unauthorized",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 4. Payment Required Error

Creates a new instance of the KitGeneralError class with a status code of 402, Payment Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 402. (e.g., `"Payment Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { PaymentRequiredError } = require('http-error-kit');

console.log(new PaymentRequiredError("Payment Required", { field: "email" }));
/*  PaymentRequiredError {
 *      statusCode: 402,
 *      message: "Payment Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 5. Forbidden Error

Creates a new instance of the KitGeneralError class with a status code of 403, Forbidden.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 403. (e.g., `"Forbidden"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ForbiddenError } = require('http-error-kit');

console.log(new ForbiddenError("Forbidden", { field: "email" }));
/*  ForbiddenError {
 *      statusCode: 403,
 *      message: "Forbidden",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 6. Not Found Error

Creates a new instance of the KitGeneralError class with a status code of 404, Not Found.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 404. (e.g., `"Not Found"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { NotFoundError } = require('http-error-kit');

console.log(new NotFoundError("Not Found", { field: "email" }));
/*  NotFoundError {
 *      statusCode: 404,
 *      message: "Not Found",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 7. Method Not Allowed Error

Creates a new instance of the KitGeneralError class with a status code of 405, Method Not Allowed.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 405. (e.g., `"Method Not Allowed"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { MethodNotAllowedError } = require('http-error-kit');

console.log(new MethodNotAllowedError("Method Not Allowed", { field: "email" }));
/*  MethodNotAllowedError {
 *      statusCode: 405,
 *      message: "Method Not Allowed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 8. Not Acceptable Error

Creates a new instance of the KitGeneralError class with a status code of 406, Not Acceptable.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 406. (e.g., `"Not Acceptable"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { NotAcceptableError } = require('http-error-kit');

console.log(new NotAcceptableError("Not Acceptable", { field: "email" }));
/*  NotAcceptableError {
 *      statusCode: 406,
 *      message: "Not Acceptable",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 9. Proxy Authentication Required Error

Creates a new instance of the KitGeneralError class with a status code of 407, Proxy Authentication Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 407. (e.g., `"Proxy Authentication Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ProxyAuthenticationRequiredError } = require('http-error-kit');

console.log(new ProxyAuthenticationRequiredError("Proxy Authentication Required", { field: "email" }));
/*  ProxyAuthenticationRequiredError {
 *      statusCode: 407,
 *      message: "Proxy Authentication Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 10. Request Timeout Error

Creates a new instance of the KitGeneralError class with a status code of 408, Request Timeout.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 408. (e.g., `"Request Timeout"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { RequestTimeoutError } = require('http-error-kit');

console.log(new RequestTimeoutError("Request Timeout", { field: "email" }));
/*  RequestTimeoutError {
 *      statusCode: 408,
 *      message: "Request Timeout",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 11. Conflict Error

Creates a new instance of the KitGeneralError class with a status code of 409, Conflict.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 409. (e.g., `"Conflict"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ConflictError } = require('http-error-kit');

console.log(new ConflictError("Conflict", { field: "email" }));
/*  ConflictError {
 *      statusCode: 409,
 *      message: "Conflict",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 12. Gone Error

Creates a new instance of the KitGeneralError class with a status code of 410, Gone.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 410. (e.g., `"Gone"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { GoneError } = require('http-error-kit');

console.log(new GoneError("Gone", { field: "email" }));
/*  GoneError {
 *      statusCode: 410,
 *      message: "Gone",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 13. Length Required Error

Creates a new instance of the KitGeneralError class with a status code of 411, Length Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 411. (e.g., `"Length Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { LengthRequiredError } = require('http-error-kit');

console.log(new LengthRequiredError("Length Required", { field: "email" }));
/*  LengthRequiredError {
 *      statusCode: 411,
 *      message: "Length Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 14. Precondition Failed Error

Creates a new instance of the KitGeneralError class with a status code of 412, Precondition Failed.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 412. (e.g., `"Precondition Failed"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { PreconditionFailedError } = require('http-error-kit');

console.log(new PreconditionFailedError("Precondition Failed", { field: "email" }));
/*  PreconditionFailedError {
 *      statusCode: 412,
 *      message: "Precondition Failed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 15. Request Entity Too Large Error

Creates a new instance of the KitGeneralError class with a status code of 413, Request Entity Too Large.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 413. (e.g., `"Request Entity Too Large"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { RequestTooLongError } = require('http-error-kit');

console.log(new RequestTooLongError("Request Entity Too Large", { field: "email" }));
/*  RequestTooLongError {
 *      statusCode: 413,
 *      message: "Request Entity Too Large",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 16. Request-URI Too Long Error

Creates a new instance of the KitGeneralError class with a status code of 414, Request-URI Too Long.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 414. (e.g., `"Request-URI Too Long"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { RequestUriTooLongError } = require('http-error-kit');

console.log(new RequestUriTooLongError("Request-URI Too Long", { field: "email" }));
/*  RequestUriTooLongError {
 *      statusCode: 414,
 *      message: "Request-URI Too Long",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 17. Unsupported Media Type Error

Creates a new instance of the KitGeneralError class with a status code of 415, Unsupported Media Type.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 415. (e.g., `"Unsupported Media Type"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { UnsupportedMediaTypeError } = require('http-error-kit');

console.log(new UnsupportedMediaTypeError("Unsupported Media Type", { field: "email" }));
/*  UnsupportedMediaTypeError {
 *      statusCode: 415,
 *      message: "Unsupported Media Type",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 18. Requested Range Not Satisfiable Error

Creates a new instance of the KitGeneralError class with a status code of 416, Requested Range Not Satisfiable.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 416. (e.g., `"Requested Range Not Satisfiable"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { RequestedRangeNotSatisfiableError } = require('http-error-kit');

console.log(new RequestedRangeNotSatisfiableError("Requested Range Not Satisfiable", { field: "email" }));
/*  RequestedRangeNotSatisfiableError {
 *      statusCode: 416,
 *      message: "Requested Range Not Satisfiable",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 19. Expectation Failed Error

Creates a new instance of the KitGeneralError class with a status code of 417, Expectation Failed.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 417. (e.g., `"Expectation Failed"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ExpectationFailedError } = require('http-error-kit');

console.log(new ExpectationFailedError("Expectation Failed", { field: "email" }));
/*  ExpectationFailedError {
 *      statusCode: 417,
 *      message: "Expectation Failed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 20. I'm a teapot Error

Creates a new instance of the KitGeneralError class with a status code of 418, I'm a teapot.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 418. (e.g., `"I'm a teapot"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ImATeapotError } = require('http-error-kit');

console.log(new ImATeapotError("I'm a teapot", { field: "email" }));
/*  ImATeapotError {
 *      statusCode: 418,
 *      message: "I'm a teapot",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 21. Insufficient Space on Resource Error

Creates a new instance of the KitGeneralError class with a status code of 419, Insufficient Space on Resource.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 419. (e.g., `"Insufficient Space on Resource"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { InsufficientSpaceOnResourceError } = require('http-error-kit');

console.log(new InsufficientSpaceOnResourceError("Insufficient Space on Resource", { field: "email" }));
/*  InsufficientSpaceOnResourceError {
 *      statusCode: 419,
 *      message: "Insufficient Space on Resource",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 22. Method Failure Error

Creates a new instance of the KitGeneralError class with a status code of 420, Method Failure.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 420. (e.g., `"Method Failure"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { MethodFailureError } = require('http-error-kit');

console.log(new MethodFailureError("Method Failure", { field: "email" }));
/*  MethodFailureError {
 *      statusCode: 420,
 *      message: "Method Failure",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 23. Misdirected Request Error

Creates a new instance of the KitGeneralError class with a status code of 421, Misdirected Request.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 421. (e.g., `"Misdirected Request"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { MisdirectedRequestError } = require('http-error-kit');

console.log(new MisdirectedRequestError("Misdirected Request", { field: "email" }));
/*  MisdirectedRequestError {
 *      statusCode: 421,
 *      message: "Misdirected Request",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 24. Unprocessable Entity Error

Creates a new instance of the KitGeneralError class with a status code of 422, Unprocessable Entity.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 422. (e.g., `"Unprocessable Entity"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { UnprocessableEntityError } = require('http-error-kit');

console.log(new UnprocessableEntityError("Unprocessable Entity", { field: "email" }));
/*  UnprocessableEntityError {
 *      statusCode: 422,
 *      message: "Unprocessable Entity",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 25. Locked Error

Creates a new instance of the KitGeneralError class with a status code of 423, Locked.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 423. (e.g., `"Locked"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { LockedError } = require('http-error-kit');

console.log(new LockedError("Locked", { field: "email" }));
/*  LockedError {
 *      statusCode: 423,
 *      message: "Locked",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 26. Failed Dependency Error

Creates a new instance of the KitGeneralError class with a status code of 424, Failed Dependency.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 424. (e.g., `"Failed Dependency"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { FailedDependencyError } = require('http-error-kit');

console.log(new FailedDependencyError("Failed Dependency", { field: "email" }));
/*  FailedDependencyError {
 *      statusCode: 424,
 *      message: "Failed Dependency",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 27. Too Early Error

Creates a new instance of the KitGeneralError class with a status code of 425, Too Early.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 425. (e.g., `"Too Early"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { TooEarlyError } = require('http-error-kit');

console.log(new TooEarlyError("Too Early", { field: "email" }));
/*  TooEarlyError {
 *      statusCode: 425,
 *      message: "Too Early",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 28. Upgrade Required Error

Creates a new instance of the KitGeneralError class with a status code of 426, Upgrade Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 426. (e.g., `"Upgrade Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { UpgradeRequiredError } = require('http-error-kit');

console.log(new UpgradeRequiredError("Upgrade Required", { field: "email" }));
/*  UpgradeRequiredError {
 *      statusCode: 426,
 *      message: "Upgrade Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 29. Precondition Required Error

Creates a new instance of the KitGeneralError class with a status code of 428, Precondition Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 428. (e.g., `"Precondition Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { PreconditionRequiredError } = require('http-error-kit');

console.log(new PreconditionRequiredError("Precondition Required", { field: "email" }));
/*  PreconditionRequiredError {
 *      statusCode: 428,
 *      message: "Precondition Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 30. Too Many Requests Error

Creates a new instance of the KitGeneralError class with a status code of 429, Too Many Requests.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 429. (e.g., `"Too Many Requests"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { TooManyRequestsError } = require('http-error-kit');

console.log(new TooManyRequestsError("Too Many Requests", { field: "email" }));
/*  TooManyRequestsError {
 *      statusCode: 429,
 *      message: "Too Many Requests",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 31. Request Header Fields Too Large Error

Creates a new instance of the KitGeneralError class with a status code of 431, Request Header Fields Too Large.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 431. (e.g., `"Request Header Fields Too Large"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { RequestHeaderFieldsTooLargeError } = require('http-error-kit');

console.log(new RequestHeaderFieldsTooLargeError("Request Header Fields Too Large", { field: "email" }));
/*  RequestHeaderFieldsTooLargeError {
 *      statusCode: 431,
 *      message: "Request Header Fields Too Large",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 32. Unavailable For Legal Reasons Error

Creates a new instance of the KitGeneralError class with a status code of 451, Unavailable For Legal Reasons.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 451. (e.g., `"Unavailable For Legal Reasons"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { UnavailableForLegalReasonsError } = require('http-error-kit');

console.log(new UnavailableForLegalReasonsError("Unavailable For Legal Reasons", { field: "email" }));
/*  UnavailableForLegalReasonsError {
 *      statusCode: 451,
 *      message: "Unavailable For Legal Reasons",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 33. Internal Server Error

Creates a new instance of the KitGeneralError class with a status code of 500, Internal Server Error.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 500. (e.g., `"Internal Server Error"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { InternalServerErrorError } = require('http-error-kit');

console.log(new InternalServerErrorError("Internal Server Error", { field: "email" }));
/*  InternalServerErrorError {
 *      statusCode: 500,
 *      message: "Internal Server Error",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 34. Not Implemented Error

Creates a new instance of the KitGeneralError class with a status code of 501, Not Implemented.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 501. (e.g., `"Not Implemented"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { NotImplementedError } = require('http-error-kit');

console.log(new NotImplementedError("Not Implemented", { field: "email" }));
/*  NotImplementedError {
 *      statusCode: 501,
 *      message: "Not Implemented",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 35. Bad Gateway Error

Creates a new instance of the KitGeneralError class with a status code of 502, Bad Gateway.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 502. (e.g., `"Bad Gateway"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { BadGatewayError } = require('http-error-kit');

console.log(new BadGatewayError("Bad Gateway", { field: "email" }));
/*  BadGatewayError {
 *      statusCode: 502,
 *      message: "Bad Gateway",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 36. Service Unavailable Error

Creates a new instance of the KitGeneralError class with a status code of 503, Service Unavailable.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 503. (e.g., `"Service Unavailable"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { ServiceUnavailableError } = require('http-error-kit');

console.log(new ServiceUnavailableError("Service Unavailable", { field: "email" }));
/*  ServiceUnavailableError {
 *      statusCode: 503,
 *      message: "Service Unavailable",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 37. Gateway Timeout Error

Creates a new instance of the KitGeneralError class with a status code of 504, Gateway Timeout.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 504. (e.g., `"Gateway Timeout"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { GatewayTimeoutError } = require('http-error-kit');

console.log(new GatewayTimeoutError("Gateway Timeout", { field: "email" }));
/*  GatewayTimeoutError {
 *      statusCode: 504,
 *      message: "Gateway Timeout",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 38. HTTP Version Not Supported Error

Creates a new instance of the KitGeneralError class with a status code of 505, HTTP Version Not Supported.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 505. (e.g., `"HTTP Version Not Supported"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { HttpVersionNotSupportedError } = require('http-error-kit');

console.log(new HttpVersionNotSupportedError("HTTP Version Not Supported", { field: "email" }));
/*  HttpVersionNotSupportedError {
 *      statusCode: 505,
 *      message: "HTTP Version Not Supported",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 39. Variant Also Negotiates Error

Creates a new instance of the KitGeneralError class with a status code of 506, Variant Also Negotiates.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 506. (e.g., `"Variant Also Negotiates"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { VariantAlsoNegotiatesError } = require('http-error-kit');

console.log(new VariantAlsoNegotiatesError("Variant Also Negotiates", { field: "email" }));
/*  VariantAlsoNegotiatesError {
 *      statusCode: 506,
 *      message: "Variant Also Negotiates",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 40. Insufficient Storage Error

Creates a new instance of the KitGeneralError class with a status code of 507, Insufficient Storage.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 507. (e.g., `"Insufficient Storage"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { InsufficientStorageError } = require('http-error-kit');

console.log(new InsufficientStorageError("Insufficient Storage", { field: "email" }));
/*  InsufficientStorageError {
 *      statusCode: 507,
 *      message: "Insufficient Storage",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 41. Loop Detected Error

Creates a new instance of the KitGeneralError class with a status code of 508, Loop Detected.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 508. (e.g., `"Loop Detected"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { LoopDetectedError } = require('http-error-kit');

console.log(new LoopDetectedError("Loop Detected", { field: "email" }));
/*  LoopDetectedError {
 *      statusCode: 508,
 *      message: "Loop Detected",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 42. Not Extended Error

Creates a new instance of the KitGeneralError class with a status code of 510, Not Extended.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 510. (e.g., `"Not Extended"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { NotExtendedError } = require('http-error-kit');

console.log(new NotExtendedError("Not Extended", { field: "email" }));
/*  NotExtendedError {
 *      statusCode: 510,
 *      message: "Not Extended",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 43. Network Authentication Required Error

Creates a new instance of the KitGeneralError class with a status code of 511, Network Authentication Required.

#### Parameters

- `message` (`string`): The error message. Defaults to the HTTP status code description for 511. (e.g., `"Network Authentication Required"`).
- `details` (`any`): Additional details about the error, if any.

### Example

```javascript
var { NetworkAuthenticationRequiredError } = require('http-error-kit');

console.log(new NetworkAuthenticationRequiredError("Network Authentication Required", { field: "email" }));
/*  NetworkAuthenticationRequiredError {
 *      statusCode: 511,
 *      message: "Network Authentication Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### 44. Kit Http Error

Represents a general error with a status code, message, and optional details.

#### Parameters

- `statusCode` (`number`): The HTTP status code associated with the error (e.g., `500`).
- `message` (`string`): A human-readable error message. (e.g., `"Internal Server Error"`).
- `details` (`any`): Additional details about the error, if any.
- `formatter` (`function`): A custom formatter function that can be used to format the error details.

### Example

```javascript
const formatter = (statusCode, message, details, ...args) => ({
    code: statusCode,
    msg: message,
    extra: details,
    traceId: args[0] || "default-trace-id"
});

const errorKit = new KitHttpError(400, "Bad Request", {}, formatter);
console.log(errorKit.BadRequestError("Invalid request", { field: "email" }, '0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a'));
/*  KitHttpError {
 *      code: 400,
 *      msg: "Invalid request",
 *      extra: {
 *          field: "email"
 *      },
 *      traceId: "0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a"
 *  }
 */
```

## People

The original author of the project is [Himanshu Bansal][skillnter]

## Donations

**This is all voluntary work**, so if you want to support my efforts you can 

- [Buy Me A Coffee](https://www.buymeacoffee.com/skillnter)
- [Paypal](https://www.paypal.me/skillnte)
- [GitHub Sponsor](https://github.com/sponsors/Skillnter)
- [Patreon](https://www.patreon.com/skillnter)
- [Open Collective](https://opencollective.com/http-error-kit)

You can also use the following:

![BTC: qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj](https://img.shields.io/badge/BTC-qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj-brightgreen)

![ETH: 0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889](https://img.shields.io/badge/ETH-0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889-brightgreen)

## License

`http-error-kit` project is open-sourced software licensed under the [MIT license](LICENSE) by [Himanshu Bansal][skillnter].

[skillnter]: https://github.com/Skillnter/
