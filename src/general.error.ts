import * as STATUS_CODES from "http-response-status-code";

/**
 * Represents a general error with a status code, message, and optional details.
 * @extends {Error}
 */
export class KitGeneralError extends Error {
    /**
     * The HTTP status code associated with the error.
     * @type {number}
     */
    statusCode: number;

    /**
     * A human-readable error message.
     * @type {string}
     */
    message: string;

    /**
     * Additional details about the error, if any.
     * @type {*}
     */
    details: unknown;

    /**
     * Initializes a new instance of the KitGeneralError class.
     * @param {number} statusCode - The HTTP status code associated with the error.
     * @param {string} message - A human-readable error message.
     * @param {*} details - Additional details about the error, if any.
     */
    constructor(statusCode: number, message: string, details: unknown = {}) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 400, Bad Request.
 * @extends KitGeneralError
 */
export class BadRequestError extends KitGeneralError {
    /**
     * Initializes a new instance of the BadRequestError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 400.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_400
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_400, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 401, Unauthorized.
 * @extends KitGeneralError
 */
export class UnauthorizedError extends KitGeneralError {
    /**
     * Initializes a new instance of the UnauthorizedError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 401.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_401
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_401, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 402, Payment Required.
 * @extends KitGeneralError
 */
export class PaymentRequiredError extends KitGeneralError {
    /**
     * Initializes a new instance of the PaymentRequiredError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 402.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_402
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_402, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 403, Forbidden.
 * @extends KitGeneralError
 */
export class ForbiddenError extends KitGeneralError {
    /**
     * Initializes a new instance of the ForbiddenError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 403.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_403
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_403, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 404, Not Found.
 * @extends KitGeneralError
 */
export class NotFoundError extends KitGeneralError {
    /**
     * Initializes a new instance of the NotFoundError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 404.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_404
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_404, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 405, Method Not Allowed.
 * @extends KitGeneralError
 */
export class MethodNotAllowedError extends KitGeneralError {
    /**
     * Initializes a new instance of the MethodNotAllowedError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 405.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_405
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_405, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 406, Not Acceptable.
 * @extends KitGeneralError
 */
export class NotAcceptableError extends KitGeneralError {
    /**
     * Initializes a new instance of the NotAcceptableError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 406.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_406
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_406, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 407, Proxy Authentication Required.
 * @extends KitGeneralError
 */
export class ProxyAuthenticationRequiredError extends KitGeneralError {
    /**
     * Initializes a new instance of the ProxyAuthenticationRequiredError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 407.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_407
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_407, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 408, Request Timeout.
 * @extends KitGeneralError
 */
export class RequestTimeoutError extends KitGeneralError {
    /**
     * Initializes a new instance of the RequestTimeoutError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 408.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_408
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_408, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 409, Conflict.
 * @extends KitGeneralError
 */
export class ConflictError extends KitGeneralError {
    /**
     * Initializes a new instance of the ConflictError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 409.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_409
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_409, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 410, Gone.
 * @extends KitGeneralError
 */
export class GoneError extends KitGeneralError {
    /**
     * Initializes a new instance of the GoneError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 410.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_410
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_410, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 411, Length Required.
 * @extends KitGeneralError
 */
export class LengthRequiredError extends KitGeneralError {
    /**
     * Initializes a new instance of the LengthRequiredError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 411.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_411
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_411, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 412, Precondition Failed.
 * @extends KitGeneralError
 */
export class PreconditionFailedError extends KitGeneralError {
    /**
     * Initializes a new instance of the PreconditionFailedError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 412.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_412
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_412, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 413, Request Entity Too Large.
 * @extends KitGeneralError
 */
export class RequestTooLongError extends KitGeneralError {
    /**
     * Initializes a new instance of the RequestTooLongError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 413.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_413
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_413, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 414, Request-URI Too Long.
 * @extends KitGeneralError
 */
export class RequestUriTooLongError extends KitGeneralError {
    /**
     * Initializes a new instance of the RequestUriTooLongError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 414.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_414
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_414, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 415, Unsupported Media Type.
 * @extends KitGeneralError
 */
export class UnsupportedMediaTypeError extends KitGeneralError {
    /**
     * Initializes a new instance of the UnsupportedMediaTypeError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 415.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_415
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_415, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 416, Requested Range Not Satisfiable.
 * @extends KitGeneralError
 */
export class RequestedRangeNotSatisfiableError extends KitGeneralError {
    /**
     * Initializes a new instance of the RequestedRangeNotSatisfiableError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 416.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_416
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_416, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 417, Expectation Failed.
 * @extends KitGeneralError
 */
export class ExpectationFailedError extends KitGeneralError {
    /**
     * Initializes a new instance of the ExpectationFailedError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 417.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_417
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_417, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 418, I'm a teapot.
 * @extends KitGeneralError
 */
export class ImATeapotError extends KitGeneralError {
    /**
     * Initializes a new instance of the ImATeapotError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 418.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_418
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_418, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 419, Insufficient Space on Resource.
 * @extends KitGeneralError
 */
export class InsufficientSpaceOnResourceError extends KitGeneralError {
    /**
     * Initializes a new instance of the InsufficientSpaceOnResourceError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 419.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_419
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_419, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 420, Method Failure.
 * @extends KitGeneralError
 */
export class MethodFailureError extends KitGeneralError {
    /**
     * Initializes a new instance of the MethodFailureError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 420.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_420
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_420, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 421, Misdirected Request.
 * @extends KitGeneralError
 */
export class MisdirectedRequestError extends KitGeneralError {
    /**
     * Initializes a new instance of the MisdirectedRequestError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 421.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_421
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_421, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 422, Unprocessable Entity.
 * @extends KitGeneralError
 */
export class UnprocessableEntityError extends KitGeneralError {
    /**
     * Initializes a new instance of the UnprocessableEntityError class.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 422.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_422
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_422, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 423, Locked.
 * @extends KitGeneralError
 */
export class LockedError extends KitGeneralError {
    /**
     * Initializes a new LockedError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 423.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_423
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_423, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 424, Failed Dependency.
 * @extends {KitGeneralError}
 */
export class FailedDependencyError extends KitGeneralError {
    /**
     * Initializes a new FailedDependencyError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 424.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_424
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_424, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 425, Too Early.
 * @extends {KitGeneralError}
 */
export class TooEarlyError extends KitGeneralError {
    /**
     * Initializes a new TooEarlyError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 425.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_425
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_425, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 426, Upgrade Required.
 * @extends {KitGeneralError}
 */
export class UpgradeRequiredError extends KitGeneralError {
    /**
     * Initializes a new UpgradeRequiredError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 426.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_426
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_426, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 428, Precondition Required.
 * @extends {KitGeneralError}
 */
export class PreconditionRequiredError extends KitGeneralError {
    /**
     * Initializes a new PreconditionRequiredError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 428.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_428
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_428, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 429, Too Many Requests.
 * @extends {KitGeneralError}
 */
export class TooManyRequestsError extends KitGeneralError {
    /**
     * Initializes a new TooManyRequestsError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 429.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_429
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_429, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 431, Request Header Fields Too Large.
 * @extends {KitGeneralError}
 */
export class RequestHeaderFieldsTooLargeError extends KitGeneralError {
    /**
     * Initializes a new RequestHeaderFieldsTooLargeError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 431.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_431
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_431, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 451, Unavailable For Legal Reasons.
 * @extends {KitGeneralError}
 */
export class UnavailableForLegalReasonsError extends KitGeneralError {
    /**
     * Initializes a new UnavailableForLegalReasonsError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 451.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_451
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_451, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 500, Internal Server Error.
 * @extends {KitGeneralError}
 */
export class InternalServerErrorError extends KitGeneralError {
    /**
     * Initializes a new InternalServerErrorError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 500.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_500
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_500, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 501, Not Implemented.
 * @extends {KitGeneralError}
 */
export class NotImplementedError extends KitGeneralError {
    /**
     * Initializes a new NotImplementedError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 501.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_501
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_501, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 502, Bad Gateway.
 * @extends {KitGeneralError}
 */
export class BadGatewayError extends KitGeneralError {
    /**
     * Initializes a new BadGatewayError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 502.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_502
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_502, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 503, Service Unavailable.
 * @extends {KitGeneralError}
 */
export class ServiceUnavailableError extends KitGeneralError {
    /**
     * Initializes a new ServiceUnavailableError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 503.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_503
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_503, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 504, Gateway Timeout.
 * @extends {KitGeneralError}
 */
export class GatewayTimeoutError extends KitGeneralError {
    /**
     * Initializes a new GatewayTimeoutError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 504.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_504
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_504, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 505, HTTP Version Not Supported.
 * @extends {KitGeneralError}
 */
export class HttpVersionNotSupportedError extends KitGeneralError {
    /**
     * Initializes a new HttpVersionNotSupportedError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 505.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_505
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_505, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 506, Variant Also Negotiates.
 * @extends {KitGeneralError}
 */
export class VariantAlsoNegotiatesError extends KitGeneralError {
    /**
     * Initializes a new VariantAlsoNegotiatesError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 506.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_506
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_506, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 507, Insufficient Storage.
 * @extends {KitGeneralError}
 */
export class InsufficientStorageError extends KitGeneralError {
    /**
     * Initializes a new InsufficientStorageError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 507.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_507
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_507, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 508, Loop Detected.
 * @extends {KitGeneralError}
 */
export class LoopDetectedError extends KitGeneralError {
    /**
     * Initializes a new LoopDetectedError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 508.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_508
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_508, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 510, Not Extended.
 * @extends {KitGeneralError}
 */
export class NotExtendedError extends KitGeneralError {
    /**
     * Initializes a new NotExtendedError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 510.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_510
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_510, message, details);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 511, Network Authentication Required.
 * @extends {KitGeneralError}
 */
export class NetworkAuthenticationRequiredError extends KitGeneralError {
    /**
     * Initializes a new NetworkAuthenticationRequiredError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 511.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_511
        ),
        details: unknown = {}
    ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        super(STATUS_CODES.CODES.HTTP_CODE_511, message, details);
    }
}
