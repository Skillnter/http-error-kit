import { KitHttpError, KitHttpErrorConfig } from "./http.error";
import { KitGeneralError } from "./general.error";
import {
    CODES as STATUS_CODES,
    getStatusDescription,
} from "http-response-status-code";

/**
 * Creates a new instance of the KitGeneralError class with a status code of 400, Bad Request.
 * @extends KitHttpError | KitGeneralError
 */
export class BadRequestError extends Error {
    /**
     * Creates a new instance of the BadRequestError class.
     * @param {string} message - The error message. Defaults to "Bad Request" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_400).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_400 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 401, Unauthorized.
 * @extends KitHttpError | KitGeneralError
 */
export class UnauthorizedError extends Error {
    /**
     * Creates a new instance of the UnauthorizedError class.
     * @param {string} message - The error message. Defaults to "Unauthorized" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_401).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_401 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 402, Payment Required.
 * @extends KitHttpError | KitGeneralError
 */
export class PaymentRequiredError extends Error {
    /**
     * Creates a new instance of the PaymentRequiredError class.
     * @param {string} message - The error message. Defaults to "Payment Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_402).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_402 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 403, Forbidden.
 * @extends KitHttpError | KitGeneralError
 */
export class ForbiddenError extends Error {
    /**
     * Creates a new instance of the ForbiddenError class.
     * @param {string} message - The error message. Defaults to "Forbidden" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_403).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_403 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 404, Not Found.
 * @extends KitHttpError | KitGeneralError
 */
export class NotFoundError extends Error {
    /**
     * Creates a new instance of the NotFoundError class.
     * @param {string} message - The error message. Defaults to "Not Found" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_404).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_404 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 405, Method Not Allowed.
 * @extends KitHttpError | KitGeneralError
 */
export class MethodNotAllowedError extends Error {
    /**
     * Creates a new instance of the MethodNotAllowedError class.
     * @param {string} message - The error message. Defaults to "Method Not Allowed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_405).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_405 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 406, Not Acceptable.
 * @extends KitHttpError | KitGeneralError
 */
export class NotAcceptableError extends Error {
    /**
     * Creates a new instance of the NotAcceptableError class.
     * @param {string} message - The error message. Defaults to "Not Acceptable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_406).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_406 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 407, Proxy Authentication Required.
 * @extends KitHttpError | KitGeneralError
 */
export class ProxyAuthenticationRequiredError extends Error {
    /**
     * Creates a new instance of the ProxyAuthenticationRequiredError class.
     * @param {string} message - The error message. Defaults to "Proxy Authentication Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_407).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_407 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 408, Request Timeout.
 * @extends KitHttpError | KitGeneralError
 */
export class RequestTimeoutError extends Error {
    /**
     * Creates a new instance of the RequestTimeoutError class.
     * @param {string} message - The error message. Defaults to "Request Timeout" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_408).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_408 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 409, Conflict.
 * @extends KitHttpError | KitGeneralError
 */
export class ConflictError extends Error {
    /**
     * Creates a new instance of the ConflictError class.
     * @param {string} message - The error message. Defaults to "Conflict" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_409).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_409 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 410, Gone.
 * @extends KitHttpError | KitGeneralError
 */
export class GoneError extends Error {
    /**
     * Creates a new instance of the GoneError class.
     * @param {string} message - The error message. Defaults to "Gone" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_410).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_410 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 411, Length Required.
 * @extends KitHttpError | KitGeneralError
 */
export class LengthRequiredError extends Error {
    /**
     * Creates a new instance of the LengthRequiredError class.
     * @param {string} message - The error message. Defaults to "Length Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_411).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_411 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 412, Precondition Failed.
 * @extends KitHttpError | KitGeneralError
 */
export class PreconditionFailedError extends Error {
    /**
     * Creates a new instance of the PreconditionFailedError class.
     * @param {string} message - The error message. Defaults to "Precondition Failed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_412).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_412 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 413, Request Entity Too Large.
 * @extends KitHttpError | KitGeneralError
 */
export class RequestTooLongError extends Error {
    /**
     * Creates a new instance of the RequestTooLongError class.
     * @param {string} message - The error message. Defaults to "Request Entity Too Large" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_413).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_413 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 414, Request-URI Too Long.
 * @extends KitHttpError | KitGeneralError
 */
export class RequestUriTooLongError extends Error {
    /**
     * Creates a new instance of the RequestUriTooLongError class.
     * @param {string} message - The error message. Defaults to "Request-URI Too Long" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_414).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_414 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 415, Unsupported Media Type.
 * @extends KitHttpError | KitGeneralError
 */
export class UnsupportedMediaTypeError extends Error {
    /**
     * Creates a new instance of the UnsupportedMediaTypeError class.
     * @param {string} message - The error message. Defaults to "Unsupported Media Type" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_415).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_415 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 416, Requested Range Not Satisfiable.
 * @extends KitHttpError | KitGeneralError
 */
export class RequestedRangeNotSatisfiableError extends Error {
    /**
     * Creates a new instance of the RequestedRangeNotSatisfiableError class.
     * @param {string} message - The error message. Defaults to "Requested Range Not Satisfiable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_416).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_416 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 417, Expectation Failed.
 * @extends KitHttpError | KitGeneralError
 */
export class ExpectationFailedError extends Error {
    /**
     * Creates a new instance of the ExpectationFailedError class.
     * @param {string} message - The error message. Defaults to "Expectation Failed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_417).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_417 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 418, I'm a teapot.
 * @extends KitHttpError | KitGeneralError
 */
export class ImATeapotError extends Error {
    /**
     * Creates a new instance of the ImATeapotError class.
     * @param {string} message - The error message. Defaults to "I'm a teapot" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_418).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_418 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 419, Insufficient Space on Resource.
 * @extends KitHttpError | KitGeneralError
 */
export class InsufficientSpaceOnResourceError extends Error {
    /**
     * Creates a new instance of the InsufficientSpaceOnResourceError class.
     * @param {string} message - The error message. Defaults to "Insufficient Space on Resource" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_419).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_419 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 420, Method Failure.
 * @extends KitHttpError | KitGeneralError
 */
export class MethodFailureError extends Error {
    /**
     * Creates a new instance of the MethodFailureError class.
     * @param {string} message - The error message. Defaults to "Method Failure" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_420).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_420 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 421, Misdirected Request.
 * @extends KitHttpError | KitGeneralError
 */
export class MisdirectedRequestError extends Error {
    /**
     * Creates a new instance of the MisdirectedRequestError class.
     * @param {string} message - The error message. Defaults to "Misdirected Request" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_421).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_421 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 422, Unprocessable Entity.
 * @extends KitHttpError | KitGeneralError
 */
export class UnprocessableEntityError extends Error {
    /**
     * Creates a new instance of the UnprocessableEntityError class.
     * @param {string} message - The error message. Defaults to "Unprocessable Entity" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_422).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_422 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 423, Locked.
 * @extends KitHttpError | KitGeneralError
 */
export class LockedError extends Error {
    /**
     * Creates a new instance of the LockedError class.
     * @param {string} message - The error message. Defaults to "Locked" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_423).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_423 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 424, Failed Dependency.
 * @extends KitHttpError | KitGeneralError
 */
export class FailedDependencyError extends Error {
    /**
     * Creates a new instance of the FailedDependencyError class.
     * @param {string} message - The error message. Defaults to "Failed Dependency" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_424).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_424 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 425, Too Early.
 * @extends KitHttpError | KitGeneralError
 */
export class TooEarlyError extends Error {
    /**
     * Creates a new instance of the TooEarlyError class.
     * @param {string} message - The error message. Defaults to "Too Early" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_425).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_425 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 426, Upgrade Required.
 * @extends KitHttpError | KitGeneralError
 */
export class UpgradeRequiredError extends Error {
    /**
     * Creates a new instance of the UpgradeRequiredError class.
     * @param {string} message - The error message. Defaults to "Upgrade Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_426).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_426 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 428, Precondition Required.
 * @extends KitHttpError | KitGeneralError
 */
export class PreconditionRequiredError extends Error {
    /**
     * Creates a new instance of the PreconditionRequiredError class.
     * @param {string} message - The error message. Defaults to "Precondition Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_428).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_428 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 429, Too Many Requests.
 * @extends KitHttpError | KitGeneralError
 */
export class TooManyRequestsError extends Error {
    /**
     * Creates a new instance of the TooManyRequestsError class.
     * @param {string} message - The error message. Defaults to "Too Many Requests" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_429).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_429 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 431, Request Header Fields Too Large.
 * @extends KitHttpError | KitGeneralError
 */
export class RequestHeaderFieldsTooLargeError extends Error {
    /**
     * Creates a new instance of the RequestHeaderFieldsTooLargeError class.
     * @param {string} message - The error message. Defaults to "Request Header Fields Too Large" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_431).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_431 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 451, Unavailable For Legal Reasons.
 * @extends KitHttpError | KitGeneralError
 */
export class UnavailableForLegalReasonsError extends Error {
    /**
     * Creates a new instance of the UnavailableForLegalReasonsError class.
     * @param {string} message - The error message. Defaults to "Unavailable For Legal Reasons" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_451).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_451 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 500, Internal Server Error.
 * @extends KitHttpError | KitGeneralError
 */
export class InternalServerError extends Error {
    /**
     * Creates a new instance of the InternalServerError class.
     * @param {string} message - The error message. Defaults to "Internal Server Error" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_500).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_500 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 501, Not Implemented.
 * @extends KitHttpError | KitGeneralError
 */
export class NotImplementedError extends Error {
    /**
     * Creates a new instance of the NotImplementedError class.
     * @param {string} message - The error message. Defaults to "Not Implemented" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_501).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_501 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 502, Bad Gateway.
 * @extends KitHttpError | KitGeneralError
 */
export class BadGatewayError extends Error {
    /**
     * Creates a new instance of the BadGatewayError class.
     * @param {string} message - The error message. Defaults to "Bad Gateway" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_502).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_502 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 503, Service Unavailable.
 * @extends KitHttpError | KitGeneralError
 */
export class ServiceUnavailableError extends Error {
    /**
     * Creates a new instance of the ServiceUnavailableError class.
     * @param {string} message - The error message. Defaults to "Service Unavailable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_503).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_503 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 504, Gateway Timeout.
 * @extends KitHttpError | KitGeneralError
 */
export class GatewayTimeoutError extends Error {
    /**
     * Creates a new instance of the GatewayTimeoutError class.
     * @param {string} message - The error message. Defaults to "Gateway Timeout" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_504).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_504 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 505, HTTP Version Not Supported.
 * @extends KitHttpError | KitGeneralError
 */
export class HttpVersionNotSupportedError extends Error {
    /**
     * Creates a new instance of the HttpVersionNotSupportedError class.
     * @param {string} message - The error message. Defaults to "HTTP Version Not Supported" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_505).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_505 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 506, Variant Also Negotiates.
 * @extends KitHttpError | KitGeneralError
 */
export class VariantAlsoNegotiatesError extends Error {
    /**
     * Creates a new instance of the VariantAlsoNegotiatesError class.
     * @param {string} message - The error message. Defaults to "Variant Also Negotiates" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_506).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_506 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 507, Insufficient Storage.
 * @extends KitHttpError | KitGeneralError
 */
export class InsufficientStorageError extends Error {
    /**
     * Creates a new instance of the InsufficientStorageError class.
     * @param {string} message - The error message. Defaults to "Insufficient Storage" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_507).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_507 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 508, Loop Detected.
 * @extends KitHttpError | KitGeneralError
 */
export class LoopDetectedError extends Error {
    /**
     * Creates a new instance of the LoopDetectedError class.
     * @param {string} message - The error message. Defaults to "Loop Detected" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_508).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_508 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 510, Not Extended.
 * @extends KitHttpError | KitGeneralError
 */
export class NotExtendedError extends Error {
    /**
     * Creates a new instance of the NotExtendedError class.
     * @param {string} message - The error message. Defaults to "Not Extended" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_510).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_510 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

/**
 * Creates a new instance of the KitGeneralError class with a status code of 511, Network Authentication Required.
 * @extends KitHttpError | KitGeneralError
 */
export class NetworkAuthenticationRequiredError extends Error {
    /**
     * Creates a new instance of the NetworkAuthenticationRequiredError class.
     * @param {string} message - The error message. Defaults to "Network Authentication Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super();
        const BaseError = KitHttpErrorConfig.shouldUseKitHttpErrors()
            ? KitHttpError
            : KitGeneralError;
        /* eslint-disable-next-line */
        message =
            message ??
            /* eslint-disable-next-line */
            getStatusDescription(STATUS_CODES.HTTP_CODE_511).toString();
        const instance = new BaseError(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_511 as number,
            message,
            details,
            ...args
        );
        Object.assign(this, instance);
        Object.setPrototypeOf(this, new.target.prototype);
        Object.setPrototypeOf(Object.getPrototypeOf(this), BaseError.prototype);
    }
}

export { KitGeneralError, KitHttpError, KitHttpErrorConfig };
