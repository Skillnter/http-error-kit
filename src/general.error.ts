import {
    CODES as STATUS_CODES,
    getStatusDescription,
} from "http-response-status-code";
import { IRawInput } from "./interfaces/input.interface";

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
     * The raw input data associated with this instance.
     * @private
     * @type {IRawInput}
     */
    private rawInputs: IRawInput;

    /**
     * Initializes a new instance of the KitGeneralError class.
     * @param {number} statusCode - The HTTP status code associated with the error.
     * @param {string} message - A human-readable error message.
     * @param {*} details - Additional details about the error, if any.
     */
    constructor(statusCode: number, message: string, details?: unknown) {
        /* istanbul ignore next */
        super(message);
        this.statusCode = statusCode;
        this.message = message.toString();
        this.details = details;
        this.rawInputs = { statusCode, message, details, args: [] };
        Object.setPrototypeOf(this, KitGeneralError.prototype);
    }

    /**
     * Returns the raw input data associated with this instance.
     * @returns {IRawInput} The raw input data associated with this instance.
     */
    getInputs() {
        return this.rawInputs;
    }

    /**
     * Returns a JSON-compatible object representation of this instance.
     * @returns {{statusCode: number, message: string, details: unknown}} A JSON-compatible object representation of this instance.
     */
    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,
            details: this.details,
        };
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_400).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_400 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, BadRequestError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_401).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_401 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_402).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_402 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, PaymentRequiredError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_403).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_403 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ForbiddenError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_404).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_404 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, NotFoundError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_405).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_405 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_406).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_406 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_407).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_407 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_408).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_408 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, RequestTimeoutError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_409).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_409 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ConflictError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_410).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_410 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, GoneError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_411).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_411 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, LengthRequiredError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_412).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_412 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, PreconditionFailedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_413).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_413 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, RequestTooLongError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_414).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_414 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, RequestUriTooLongError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_415).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_415 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_416).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_416 as number,
            message,
            details
        );
        Object.setPrototypeOf(
            this,
            RequestedRangeNotSatisfiableError.prototype
        );
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_417).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_417 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ExpectationFailedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_418).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_418 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ImATeapotError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_419).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_419 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, InsufficientSpaceOnResourceError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_420).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_420 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, MethodFailureError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_421).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_421 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, MisdirectedRequestError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_422).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_422 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_423).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_423 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, LockedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_424).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_424 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, FailedDependencyError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_425).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_425 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, TooEarlyError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_426).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_426 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_428).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_428 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_429).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_429 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_431).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_431 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_451).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_451 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, UnavailableForLegalReasonsError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 500, Internal Server Error.
 * @extends {KitGeneralError}
 */
export class InternalServerError extends KitGeneralError {
    /**
     * Initializes a new InternalServerErrorError instance.
     * @param {string} [message] - The error message. Defaults to the HTTP status code description for 500.
     * @param {unknown} [details] - Additional error details.
     */
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_500).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_500 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, InternalServerError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_501).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_501 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, NotImplementedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_502).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_502 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, BadGatewayError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_503).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_503 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_504).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_504 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_505).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_505 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, HttpVersionNotSupportedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_506).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_506 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_507).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_507 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, InsufficientStorageError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_508).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_508 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, LoopDetectedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_510).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_510 as number,
            message,
            details
        );
        Object.setPrototypeOf(this, NotExtendedError.prototype);
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
    constructor(message?: string, details?: unknown) {
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_511).toString();
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_511 as number,
            message,
            details
        );
        Object.setPrototypeOf(
            this,
            NetworkAuthenticationRequiredError.prototype
        );
    }
}
