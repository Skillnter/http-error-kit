# Http Error Kit

`http-error-kit` is a versatile and customizable error handling library for JavaScript and TypeScript applications. It provides a collection of HTTP error classes that can be tailored to fit various formatting needs, both globally and on a per-instance basis.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/skillnter/http-error-kit/main.yml)
[![npm version](https://img.shields.io/npm/v/http-error-kit?color=brightgreen)](https://www.npmjs.com/package/http-error-kit)
[![GitHub license](https://img.shields.io/github/license/skillnter/http-error-kit?color=brightgreen)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Skillnter/http-error-kit)](https://github.com/Skillnter/http-error-kit/issues)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/b55bf0140f674909814b8baea8ec8b16)](https://app.codacy.com/gh/Skillnter/http-error-kit/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b55bf0140f674909814b8baea8ec8b16)](https://app.codacy.com/gh/Skillnter/http-error-kit/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![npms.io (final)](https://img.shields.io/npms-io/maintenance-score/http-error-kit?color=brightgreen)
![npm](https://img.shields.io/npm/dy/http-error-kit)
[![Socket Badge](https://socket.dev/api/badge/npm/package/http-error-kit/1.7.5)](https://socket.dev/npm/package/http-error-kit/overview/1.0.0)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white)](https://skillnter.github.io/http-error-kit/)
[![Github Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-30363D?&logo=GitHub-Sponsors&logoColor=EA4AAA)](https://github.com/sponsors/Skillnter)
[![Open Collective](https://img.shields.io/badge/Open%20Collective-3385FF?logo=open-collective&logoColor=white)](https://opencollective.com/http-error-kit)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/skillnter)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?logo=patreon&logoColor=white)](https://www.patreon.com/skillnter)
[![PayPal](https://img.shields.io/badge/PayPal-003087?logo=paypal&logoColor=fff)](https://www.paypal.me/skillnte)

## Features

-   Predefined HTTP error classes (e.g., `NotFoundError`, `BadRequestError`, `InternalServerError`, etc.)
-   Customizable error formatting
-   Consistent error structure across applications
-   Works seamlessly with TypeScript

## Table of Content

-   [Installation](#installation)
-   [Usage](#usage)
    -   [1. Dynamic Formatting ( Default )](#1-dynamic-formatting--default-)
    -   [2. Generic HTTP Errors](#2-generic-http-errors)
    -   [3. Standardized HTTP Errors (Configurable Formatting)](#3-standardized-http-errors-configurable-formatting)
-   [Formatters](#formatters)
    -   [Using a Custom Error Formatter](#using-a-custom-error-formatter)
    -   [Key Differences](#key-differences)
    -   [Types of Formatter](#types-of-formatter)
        -   [1. Global Formatter](#1-global-formatter)
        -   [2. Instance-Level Formatter Override](#2-instance-level-formatter-override)
-   [Error Kit Overview](#error-kit-overview)
    -   [Common Error Classes](#common-error-classes)
        -   [1. Bad Request Error](#1-bad-request-error)
        -   [2. Unauthorized Error](#2-unauthorized-error)
        -   [3. Payment Required Error](#3-payment-required-error)
        -   [4. Forbidden Error](#4-forbidden-error)
        -   [5. Not Found Error](#5-not-found-error)
        -   [6. Method Not Allowed Error](#6-method-not-allowed-error)
        -   [7. Not Acceptable Error](#7-not-acceptable-error)
        -   [8. Proxy Authentication Required Error](#8-proxy-authentication-required-error)
        -   [9. Request Timeout Error](#9-request-timeout-error)
        -   [10. Conflict Error](#10-conflict-error)
        -   [11. Gone Error](#11-gone-error)
        -   [12. Length Required Error](#12-length-required-error)
        -   [13. Precondition Failed Error](#13-precondition-failed-error)
        -   [14. Request Entity Too Large Error](#14-request-entity-too-large-error)
        -   [15. Request-URI Too Long Error](#15-request-uri-too-long-error)
        -   [16. Unsupported Media Type Error](#16-unsupported-media-type-error)
        -   [17. Requested Range Not Satisfiable Error](#17-requested-range-not-satisfiable-error)
        -   [18. Expectation Failed Error](#18-expectation-failed-error)
        -   [19. I'm a teapot Error](#19-im-a-teapot-error)
        -   [20. Insufficient Space on Resource Error](#20-insufficient-space-on-resource-error)
        -   [21. Method Failure Error](#21-method-failure-error)
        -   [22. Misdirected Request Error](#22-misdirected-request-error)
        -   [23. Unprocessable Entity Error](#23-unprocessable-entity-error)
        -   [24. Locked Error](#24-locked-error)
        -   [25. Failed Dependency Error](#25-failed-dependency-error)
        -   [26. Too Early Error](#27-too-early-error)
        -   [27. Upgrade Required Error](#27-upgrade-required-error)
        -   [28. Precondition Required Error](#28-precondition-required-error)
        -   [29. Too Many Requests Error](#29-too-many-requests-error)
        -   [30. Request Header Fields Too Large Error](#30-request-header-fields-too-large-error)
        -   [31. Unavailable For Legal Reasons Error](#31-unavailable-for-legal-reasons-error)
        -   [32. Internal Server Error](#32-internal-server-error)
        -   [33. Not Implemented Error](#33-not-implemented-error)
        -   [34. Bad Gateway Error](#34-bad-gateway-error)
        -   [35. Service Unavailable Error](#35-service-unavailable-error)
        -   [36. Gateway Timeout Error](#36-gateway-timeout-error)
        -   [37. HTTP Version Not Supported Error](#37-http-version-not-supported-error)
        -   [38. Variant Also Negotiates Error](#38-variant-also-negotiates-error)
        -   [39. Insufficient Storage Error](#39-insufficient-storage-error)
        -   [40. Loop Detected Error](#40-loop-detected-error)
        -   [41. Not Extended Error](#41-not-extended-error)
        -   [42. Network Authentication Required Error](#42-network-authentication-required-error)
    -   [Special Error Classes](#special-error-classes)
        -   [43. Kit General Error](#43-kit-general-error)
        -   [44. Kit Http Error](#44-kit-http-error)
-   [People](#people)
-   [Donations](#donations)
-   [License](#license)

## Installation

```console
npm install http-error-kit
```

## Usage

### 1. Dynamic Formatting ( Default )

By default, importing error classes allows their format to be dynamically updated by changing the global formatter.

```javascript
const { BadRequestError } = require("http-error-kit");
//
import { BadRequestError } from "http-error-kit";

console.log(new BadRequestError("Invalid request", { field: "email" }));
/*  BadRequestError {
 *      statusCode: 400,
 *      message: "Invalid request",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

After setting a global formatter, the same error class will follow the new structure defined by the formatter.

```javascript
const { BadRequestError, KitHttpErrorConfig } = require("http-error-kit");
//
import { BadRequestError, KitHttpErrorConfig } from "http-error-kit";

const formatter = (statusCode, message, details, ...args) => ({
    code: statusCode,
    msg: message,
    extra: details,
    traceId: args[0] || "default-trace-id",
});

KitHttpErrorConfig.configureFormatter(formatter);

console.log(new BadRequestError("Invalid request", { field: "email" }));
/*  BadRequestError {
 *      code: 400,
 *      msg: "Invalid request",
 *      extra: {
 *          field: "email"
 *      },
 *      traceId: "default-trace-id"
 *  }
 */
```

### 2. Generic HTTP Errors

By default, if you import errors without any additional setup, you'll get the **generic error implementations**.

```javascript
const { BadRequestError } = require("http-error-kit");
//
import { BadRequestError } from "http-error-kit";

console.log(new BadRequestError("Invalid request", { field: "email" }));
/*  BadRequestError {
 *      statusCode: 400,
 *      message: "Invalid request",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

This follows a **simple structure** without any additional formatting.

**Note:** If you prefer to use errors specifically with simple structure (extended by `KitGeneralError`), you can explicitly import errors from:

```javascript
const { BadRequestError } = require("http-error-kit/generic");
```

### 3. Standardized HTTP Errors (Configurable Formatting)

You can set a global formatter to customize the error structure across your application.
To enable structured error responses, use `KitHttpError` with global configuration:

```javascript
const { BadRequestError, KitHttpErrorConfig } = require("http-error-kit");

KitHttpErrorConfig.configureFormatter(
    (statusCode, message, details, ...args) => ({
        code: statusCode,
        msg: message,
        extra: details,
        traceId: args[0] || "0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a",
    })
);

console.log(
    new BadRequestError("Invalid request", { field: "email" }, "trace-123")
);
/*  BadRequestError {
 *      code: 400,
 *      msg: "Invalid request",
 *      extra: {
 *          field: "email"
 *      },
 *      traceId: "trace-123"
 *  }
 */
```

## Formatters

### Using a Custom Error Formatter

A custom formatter allows you to modify the structure of error responses. The formatter function receives the following parameters:

| Parameter    | Description                                          |
| ------------ | ---------------------------------------------------- |
| `statusCode` | The HTTP status code (e.g., `400` for "Bad Request") |
| `message`    | The error message (e.g., `"Invalid request"`)        |
| `details`    | Additional error details (optional)                  |
| `...args`    | Extra arguments passed, such as a unique trace ID    |

## Key Differences

| Feature             | http-error-kit                                                                                                                           | http-error-kit/http                                                                                                                      | http-error-kit/generic                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Error Type**      | Standardized errors (with global formatting) and can be overridden by instance-level formatters at the error instance level              | Standardized errors (with global formatting) and can be overridden by instance-level formatters at the error instance level              | Static format errors (no dynamic formatting)                |
| **Import Path**     | `import { BadRequestError } from "http-error-kit";`                                                                                      | `import { BadRequestError } from "http-error-kit/http";`                                                                                 | `import { BadRequestError } from "http-error-kit/generic";` |
| **Customization**   | Uses global formatter set via `KitHttpErrorConfig.configureFormatter` with the ability to change format with an instance-level formatter | Uses global formatter set via `KitHttpErrorConfig.configureFormatter` with the ability to change format with an instance-level formatter | Uses a fixed structure without formatting customization     |
| **Formatter Usage** | Global formatter applied to all errors dynamically but can be customized per instance and does not affect other instances                | Global formatter applied to all errors dynamically but can be customized per instance and does not affect other instances                | Always follows a predefined static structure                |
| **Special Classes** | `KitGeneralError`, `KitHttpError`, `KitHttpErrorConfig`                                                                                  | `KitHttpError`, `KitHttpErrorConfig`                                                                                                     | `KitGeneralError`                                           |
| **When to Use?**    | When you need a globally consistent error structure with the flexibility to override formatting per instance                             | When you need a globally consistent error structure with the flexibility to override formatting per instance                             | When you need lightweight, raw errors without customization |
| **Example Output**  | `{ code: 400, msg: "Invalid request", extra: { field: "email" }, traceId: "trace-123" }`                                                 | `{ code: 400, msg: "Invalid request", extra: { field: "email" }, traceId: "trace-456" }`                                                 | `{ status: 400, message: "Invalid request" }`               |
| **Best for**        | Large-scale applications needing standardized error responses with flexible formatting options                                           | Applications needing flexible, instance-based error customization                                                                        | Minimalist applications needing basic HTTP errors           |

---

> **Important Note:**
>
> -   If a global formatter is set, all error classes imported from `http-error-kit` work like `http-error-kit/http`.
>
> -   If no global formatter is set, all error classes imported from `http-error-kit` work like `http-error-kit/generic`.

### Types of Formatter

### 1. Global Formatter

You can define a global formatter to standardize the structure of all error instances.

```javascript
const { KitHttpErrorConfig } = require("http-error-kit");

KitHttpErrorConfig.configureFormatter(
    (statusCode, message, details, ...args) => ({
        code: statusCode,
        msg: message,
        extra: details,
        traceId: args[0] || "0fcb44cb-4f09-4900-8c4f-73ddd37ffe0a",
    })
);
```

This formatter will be applied to all error instances imported from the default path (`http-error-kit`) and those from the `http-error-kit/http` path, unless an instance-level formatter is set.

### 2. Instance-Level Formatter Override

For specific cases, you can override the global formatter by setting an instance-level formatter.

```javascript
const { BadRequestError } = require("http-error-kit/http");

const instanceFormatter = (statusCode, message, details, ...args) => ({
    errorCode: statusCode,
    errorMessage: message,
    errorDetails: details,
    requestId: args[0] || "instance-trace-id",
});

console.log(
    new BadRequestError(
        "Invalid request",
        { field: "email" },
        "trace-456"
    ).setFormatter(instanceFormatter)
);
/*  BadRequestError {
 *      errorCode: 400,
 *      errorMessage: "Invalid request",
 *      errorDetails: {
 *          field: "email"
 *      },
 *      requestId: "trace-456"
 *  }
 */
```

This will override the global formatter **only for this instance**

## Error Kit Overview

### Common Error Classes

#### 1. Bad Request Error

Creates a new instance of the KitGeneralError class with a status code of 400, Bad Request.

##### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 400. (e.g., `"Bad Request"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { BadRequestError } = require("http-error-kit");

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

#### 2. Unauthorized Error

Creates a new instance of the KitGeneralError class with a status code of 401, Unauthorized.

##### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 401. (e.g., `"Unauthorized"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { UnauthorizedError } = require("http-error-kit");

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

#### 3. Payment Required Error

Creates a new instance of the KitGeneralError class with a status code of 402, Payment Required.

##### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 402. (e.g., `"Payment Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { PaymentRequiredError } = require("http-error-kit");

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

#### 4. Forbidden Error

Creates a new instance of the KitGeneralError class with a status code of 403, Forbidden.

##### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 403. (e.g., `"Forbidden"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ForbiddenError } = require("http-error-kit");

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

#### 5. Not Found Error

Creates a new instance of the KitGeneralError class with a status code of 404, Not Found.

##### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 404. (e.g., `"Not Found"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { NotFoundError } = require("http-error-kit");

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

#### 6. Method Not Allowed Error

Creates a new instance of the KitGeneralError class with a status code of 405, Method Not Allowed.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 405. (e.g., `"Method Not Allowed"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { MethodNotAllowedError } = require("http-error-kit");

console.log(
    new MethodNotAllowedError("Method Not Allowed", { field: "email" })
);
/*  MethodNotAllowedError {
 *      statusCode: 405,
 *      message: "Method Not Allowed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 7. Not Acceptable Error

Creates a new instance of the KitGeneralError class with a status code of 406, Not Acceptable.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 406. (e.g., `"Not Acceptable"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { NotAcceptableError } = require("http-error-kit");

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

#### 8. Proxy Authentication Required Error

Creates a new instance of the KitGeneralError class with a status code of 407, Proxy Authentication Required.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 407. (e.g., `"Proxy Authentication Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ProxyAuthenticationRequiredError } = require("http-error-kit");

console.log(
    new ProxyAuthenticationRequiredError("Proxy Authentication Required", {
        field: "email",
    })
);
/*  ProxyAuthenticationRequiredError {
 *      statusCode: 407,
 *      message: "Proxy Authentication Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 9. Request Timeout Error

Creates a new instance of the KitGeneralError class with a status code of 408, Request Timeout.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 408. (e.g., `"Request Timeout"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { RequestTimeoutError } = require("http-error-kit");

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

#### 10. Conflict Error

Creates a new instance of the KitGeneralError class with a status code of 409, Conflict.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 409. (e.g., `"Conflict"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ConflictError } = require("http-error-kit");

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

#### 11. Gone Error

Creates a new instance of the KitGeneralError class with a status code of 410, Gone.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 410. (e.g., `"Gone"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { GoneError } = require("http-error-kit");

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

#### 12. Length Required Error

Creates a new instance of the KitGeneralError class with a status code of 411, Length Required.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 411. (e.g., `"Length Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { LengthRequiredError } = require("http-error-kit");

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

#### 13. Precondition Failed Error

Creates a new instance of the KitGeneralError class with a status code of 412, Precondition Failed.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 412. (e.g., `"Precondition Failed"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { PreconditionFailedError } = require("http-error-kit");

console.log(
    new PreconditionFailedError("Precondition Failed", { field: "email" })
);
/*  PreconditionFailedError {
 *      statusCode: 412,
 *      message: "Precondition Failed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 14. Request Entity Too Large Error

Creates a new instance of the KitGeneralError class with a status code of 413, Request Entity Too Large.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 413. (e.g., `"Request Entity Too Large"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { RequestTooLongError } = require("http-error-kit");

console.log(
    new RequestTooLongError("Request Entity Too Large", { field: "email" })
);
/*  RequestTooLongError {
 *      statusCode: 413,
 *      message: "Request Entity Too Large",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 15. Request-URI Too Long Error

Creates a new instance of the KitGeneralError class with a status code of 414, Request-URI Too Long.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 414. (e.g., `"Request-URI Too Long"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { RequestUriTooLongError } = require("http-error-kit");

console.log(
    new RequestUriTooLongError("Request-URI Too Long", { field: "email" })
);
/*  RequestUriTooLongError {
 *      statusCode: 414,
 *      message: "Request-URI Too Long",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 16. Unsupported Media Type Error

Creates a new instance of the KitGeneralError class with a status code of 415, Unsupported Media Type.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 415. (e.g., `"Unsupported Media Type"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { UnsupportedMediaTypeError } = require("http-error-kit");

console.log(
    new UnsupportedMediaTypeError("Unsupported Media Type", { field: "email" })
);
/*  UnsupportedMediaTypeError {
 *      statusCode: 415,
 *      message: "Unsupported Media Type",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 17. Requested Range Not Satisfiable Error

Creates a new instance of the KitGeneralError class with a status code of 416, Requested Range Not Satisfiable.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 416. (e.g., `"Requested Range Not Satisfiable"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { RequestedRangeNotSatisfiableError } = require("http-error-kit");

console.log(
    new RequestedRangeNotSatisfiableError("Requested Range Not Satisfiable", {
        field: "email",
    })
);
/*  RequestedRangeNotSatisfiableError {
 *      statusCode: 416,
 *      message: "Requested Range Not Satisfiable",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 18. Expectation Failed Error

Creates a new instance of the KitGeneralError class with a status code of 417, Expectation Failed.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 417. (e.g., `"Expectation Failed"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ExpectationFailedError } = require("http-error-kit");

console.log(
    new ExpectationFailedError("Expectation Failed", { field: "email" })
);
/*  ExpectationFailedError {
 *      statusCode: 417,
 *      message: "Expectation Failed",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 19. I'm a teapot Error

Creates a new instance of the KitGeneralError class with a status code of 418, I'm a teapot.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 418. (e.g., `"I'm a teapot"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ImATeapotError } = require("http-error-kit");

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

#### 20. Insufficient Space on Resource Error

Creates a new instance of the KitGeneralError class with a status code of 419, Insufficient Space on Resource.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 419. (e.g., `"Insufficient Space on Resource"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { InsufficientSpaceOnResourceError } = require("http-error-kit");

console.log(
    new InsufficientSpaceOnResourceError("Insufficient Space on Resource", {
        field: "email",
    })
);
/*  InsufficientSpaceOnResourceError {
 *      statusCode: 419,
 *      message: "Insufficient Space on Resource",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 21. Method Failure Error

Creates a new instance of the KitGeneralError class with a status code of 420, Method Failure.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 420. (e.g., `"Method Failure"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { MethodFailureError } = require("http-error-kit");

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

#### 22. Misdirected Request Error

Creates a new instance of the KitGeneralError class with a status code of 421, Misdirected Request.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 421. (e.g., `"Misdirected Request"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { MisdirectedRequestError } = require("http-error-kit");

console.log(
    new MisdirectedRequestError("Misdirected Request", { field: "email" })
);
/*  MisdirectedRequestError {
 *      statusCode: 421,
 *      message: "Misdirected Request",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 23. Unprocessable Entity Error

Creates a new instance of the KitGeneralError class with a status code of 422, Unprocessable Entity.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 422. (e.g., `"Unprocessable Entity"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { UnprocessableEntityError } = require("http-error-kit");

console.log(
    new UnprocessableEntityError("Unprocessable Entity", { field: "email" })
);
/*  UnprocessableEntityError {
 *      statusCode: 422,
 *      message: "Unprocessable Entity",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 24. Locked Error

Creates a new instance of the KitGeneralError class with a status code of 423, Locked.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 423. (e.g., `"Locked"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { LockedError } = require("http-error-kit");

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

#### 25. Failed Dependency Error

Creates a new instance of the KitGeneralError class with a status code of 424, Failed Dependency.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 424. (e.g., `"Failed Dependency"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { FailedDependencyError } = require("http-error-kit");

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

#### 26. Too Early Error

Creates a new instance of the KitGeneralError class with a status code of 425, Too Early.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 425. (e.g., `"Too Early"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { TooEarlyError } = require("http-error-kit");

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

#### 27. Upgrade Required Error

Creates a new instance of the KitGeneralError class with a status code of 426, Upgrade Required.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 426. (e.g., `"Upgrade Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { UpgradeRequiredError } = require("http-error-kit");

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

#### 28. Precondition Required Error

Creates a new instance of the KitGeneralError class with a status code of 428, Precondition Required.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 428. (e.g., `"Precondition Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { PreconditionRequiredError } = require("http-error-kit");

console.log(
    new PreconditionRequiredError("Precondition Required", { field: "email" })
);
/*  PreconditionRequiredError {
 *      statusCode: 428,
 *      message: "Precondition Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 29. Too Many Requests Error

Creates a new instance of the KitGeneralError class with a status code of 429, Too Many Requests.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 429. (e.g., `"Too Many Requests"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { TooManyRequestsError } = require("http-error-kit");

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

#### 30. Request Header Fields Too Large Error

Creates a new instance of the KitGeneralError class with a status code of 431, Request Header Fields Too Large.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 431. (e.g., `"Request Header Fields Too Large"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { RequestHeaderFieldsTooLargeError } = require("http-error-kit");

console.log(
    new RequestHeaderFieldsTooLargeError("Request Header Fields Too Large", {
        field: "email",
    })
);
/*  RequestHeaderFieldsTooLargeError {
 *      statusCode: 431,
 *      message: "Request Header Fields Too Large",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 31. Unavailable For Legal Reasons Error

Creates a new instance of the KitGeneralError class with a status code of 451, Unavailable For Legal Reasons.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 451. (e.g., `"Unavailable For Legal Reasons"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { UnavailableForLegalReasonsError } = require("http-error-kit");

console.log(
    new UnavailableForLegalReasonsError("Unavailable For Legal Reasons", {
        field: "email",
    })
);
/*  UnavailableForLegalReasonsError {
 *      statusCode: 451,
 *      message: "Unavailable For Legal Reasons",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 32. Internal Server Error

Creates a new instance of the KitGeneralError class with a status code of 500, Internal Server Error.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 500. (e.g., `"Internal Server Error"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { InternalServerError } = require("http-error-kit");

console.log(
    new InternalServerError("Internal Server Error", { field: "email" })
);
/*  InternalServerError {
 *      statusCode: 500,
 *      message: "Internal Server Error",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 33. Not Implemented Error

Creates a new instance of the KitGeneralError class with a status code of 501, Not Implemented.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 501. (e.g., `"Not Implemented"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { NotImplementedError } = require("http-error-kit");

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

#### 34. Bad Gateway Error

Creates a new instance of the KitGeneralError class with a status code of 502, Bad Gateway.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 502. (e.g., `"Bad Gateway"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { BadGatewayError } = require("http-error-kit");

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

#### 35. Service Unavailable Error

Creates a new instance of the KitGeneralError class with a status code of 503, Service Unavailable.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 503. (e.g., `"Service Unavailable"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { ServiceUnavailableError } = require("http-error-kit");

console.log(
    new ServiceUnavailableError("Service Unavailable", { field: "email" })
);
/*  ServiceUnavailableError {
 *      statusCode: 503,
 *      message: "Service Unavailable",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 36. Gateway Timeout Error

Creates a new instance of the KitGeneralError class with a status code of 504, Gateway Timeout.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 504. (e.g., `"Gateway Timeout"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { GatewayTimeoutError } = require("http-error-kit");

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

#### 37. HTTP Version Not Supported Error

Creates a new instance of the KitGeneralError class with a status code of 505, HTTP Version Not Supported.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 505. (e.g., `"HTTP Version Not Supported"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { HttpVersionNotSupportedError } = require("http-error-kit");

console.log(
    new HttpVersionNotSupportedError("HTTP Version Not Supported", {
        field: "email",
    })
);
/*  HttpVersionNotSupportedError {
 *      statusCode: 505,
 *      message: "HTTP Version Not Supported",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 38. Variant Also Negotiates Error

Creates a new instance of the KitGeneralError class with a status code of 506, Variant Also Negotiates.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 506. (e.g., `"Variant Also Negotiates"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { VariantAlsoNegotiatesError } = require("http-error-kit");

console.log(
    new VariantAlsoNegotiatesError("Variant Also Negotiates", {
        field: "email",
    })
);
/*  VariantAlsoNegotiatesError {
 *      statusCode: 506,
 *      message: "Variant Also Negotiates",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 39. Insufficient Storage Error

Creates a new instance of the KitGeneralError class with a status code of 507, Insufficient Storage.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 507. (e.g., `"Insufficient Storage"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { InsufficientStorageError } = require("http-error-kit");

console.log(
    new InsufficientStorageError("Insufficient Storage", { field: "email" })
);
/*  InsufficientStorageError {
 *      statusCode: 507,
 *      message: "Insufficient Storage",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 40. Loop Detected Error

Creates a new instance of the KitGeneralError class with a status code of 508, Loop Detected.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 508. (e.g., `"Loop Detected"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { LoopDetectedError } = require("http-error-kit");

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

#### 41. Not Extended Error

Creates a new instance of the KitGeneralError class with a status code of 510, Not Extended.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 510. (e.g., `"Not Extended"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { NotExtendedError } = require("http-error-kit");

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

#### 42. Network Authentication Required Error

Creates a new instance of the KitGeneralError class with a status code of 511, Network Authentication Required.

###### Parameters

-   `message` (`string`): The error message. Defaults to the HTTP status code description for 511. (e.g., `"Network Authentication Required"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { NetworkAuthenticationRequiredError } = require("http-error-kit");

console.log(
    new NetworkAuthenticationRequiredError("Network Authentication Required", {
        field: "email",
    })
);
/*  NetworkAuthenticationRequiredError {
 *      statusCode: 511,
 *      message: "Network Authentication Required",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

### Special Error Classes

#### 43. Kit General Error

Represents a general error with a status code, message, and optional details.

> ✅ **Available in**: `http-error-kit` and `http-error-kit/generic`

###### Parameters

-   `statusCode` (`number`): The HTTP status code associated with the error (e.g., `500`).
-   `message` (`string`): A human-readable error message. (e.g., `"Internal Server Error"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const { KitGeneralError } = require("http-error-kit");

console.log(
    new KitGeneralError(500, "Internal Server Error", { field: "email" })
);
/*  KitGeneralError {
 *      statusCode: 500,
 *      message: "Internal Server Error",
 *      details: {
 *          field: "email"
 *      }
 *  }
 */
```

#### 44. Kit Http Error

Represents a general error with a status code, message, and optional details.

> ✅ **Available in**: `http-error-kit` and `http-error-kit/http`

###### Parameters

-   `statusCode` (`number`): The HTTP status code associated with the error (e.g., `500`).
-   `message` (`string`): A human-readable error message. (e.g., `"Internal Server Error"`).
-   `details` (`any`): Additional details about the error, if any.

##### Example

```javascript
const formatter = (statusCode, message, details, ...args) => ({
    code: statusCode,
    msg: message,
    extra: details,
    traceId: args[0] || "default-trace-id",
});

console.log(new KitHttpError(400, "Bad Request", {}).setFormatter(formatter));
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

-   [Buy Me A Coffee](https://www.buymeacoffee.com/skillnter)
-   [Paypal](https://www.paypal.me/skillnte)
-   [GitHub Sponsor](https://github.com/sponsors/Skillnter)
-   [Patreon](https://www.patreon.com/skillnter)
-   [Open Collective](https://opencollective.com/http-error-kit)

You can also use the following:

![BTC: qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj](https://img.shields.io/badge/BTC-qzqmpxux3m56qqhz465u8022q9z63w2sysq4u9ltwj-brightgreen)

![ETH: 0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889](https://img.shields.io/badge/ETH-0x1D59a291391a3CE17C63D5dC50F258Dc0Ab62889-brightgreen)

## License

`http-error-kit` project is open-sourced software licensed under the [MIT license](LICENSE) by [Himanshu Bansal][skillnter].

[skillnter]: https://github.com/Skillnter/
