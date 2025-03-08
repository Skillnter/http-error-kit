import {
    CODES as STATUS_CODES,
    getStatusDescription,
} from "http-response-status-code";
import { IFormatter } from "./types/formatter.type";
import { IRawInput } from "./interfaces/input.interface";

/**
 * A flag indicating whether KitHttpError-based errors should be used globally.
 * When set to `true`, KitHttpError-based errors will be used; otherwise, standard errors will be used.
 * @type {boolean}
 */
let useKitHttpErrors = false;

/**
 * A constant representing the length of an empty array.
 * @constant {number}
 */
const EMPTY_ARRAY_LENGTH = 0;

/**
 * Represents a customizable error with a status code, message, and optional details.
 * @extends {Error}
 */
export class KitHttpError extends Error {
    /**
     * Allows for dynamic assignment of arbitrary properties.
     * @type {unknown}
     */
    [key: string]: unknown;

    /**
     * The HTTP status code associated with the error.
     * @type {number}
     */
    statusCode?: number;

    /**
     * A human-readable error message.
     * @type {string}
     */
    message!: string;

    /**
     * Additional details about the error, if any.
     * @type {*}
     */
    details?: unknown;

    /**
     * A default formatter function used to format error details when no instance-specific formatter is provided.
     * @type {(statusCode: number, message: string, details?: unknown, ...args: unknown[]) => unknown}
     * @private
     * @static
     */
    private static defaultFormatter?: IFormatter;

    /**
     * An instance-specific formatter function to override the global formatter.
     * @private
     * @type {(statusCode: number, message: string, details?: unknown, ...args: unknown[]) => unknown}
     */
    private instanceFormatter?: IFormatter;

    /**
     * The raw input data associated with this instance.
     * @private
     * @type {IRawInput}
     */
    private rawInputs: IRawInput;

    /**
     * Initializes a new instance of the KitHttpError class.
     * @param {number} statusCode - The HTTP status code associated with the error.
     * @param {string} message - A human-readable error message.
     * @param {*} [details] - Additional details about the error, if any.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(
        statusCode: number,
        message: string,
        details?: unknown,
        ...args: unknown[]
    ) {
        /* istanbul ignore next */
        super(message);
        this.rawInputs = { statusCode, message, details, args };
        const formatter = KitHttpError.defaultFormatter;
        if (formatter) {
            Object.assign(
                this,
                formatter(statusCode, message, details, ...args)
            );
        } else {
            this.statusCode = statusCode;
            this.message = message;
            this.details = details;
            if (
                /* eslint-disable-next-line */
                args &&
                Array.isArray(args) &&
                args.length > EMPTY_ARRAY_LENGTH
            ) {
                Object.assign(this, ...args);
            }
        }
        Object.setPrototypeOf(this, new.target.prototype);
    }

    /**
     * Configures a global formatter function for all instances of KitHttpError.
     * This formatter will be used to format error details unless an instance-specific formatter is provided.
     * @param {(statusCode: number, message: string, details?: unknown, ...args: unknown[]) => unknown} formatter - A function to format error details, which takes the status code, message, optional details, and additional arguments as parameters.
     */
    static _configureFormatter(formatter: IFormatter): void {
        KitHttpError.defaultFormatter = formatter;
    }

    /**
     * Sets a custom formatter function for this instance, which will be used to format error details.
     * This will override any global formatter function set by `KitHttpErrorConfig.configureFormatter()`.
     * @param {IFormatter} formatter - A function to format error details, which takes the status code, message, optional details, and additional arguments as parameters.
     * @returns {this} The current instance for method chaining.
     */
    setFormatter(formatter: IFormatter): this {
        this.instanceFormatter = formatter;
        Object.assign(
            this,
            formatter(
                this.rawInputs.statusCode,
                this.rawInputs.message,
                this.rawInputs.details,
                ...this.rawInputs.args
            )
        );

        return this;
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
     * If a formatter function is provided (either globally or instance-specific),
     * it will be used to format the error details.
     * Otherwise, the object will contain the `statusCode`, `message`, and `details` properties.
     * @returns {{statusCode: number, message: string, details: unknown}} A JSON-compatible object representation of this instance.
     */
    toJSON() {
        const formatter =
            this.instanceFormatter ?? KitHttpError.defaultFormatter;
        if (formatter) {
            return formatter(
                this.rawInputs.statusCode,
                this.rawInputs.message,
                this.rawInputs.details,
                ...this.rawInputs.args
            );
        }
        return {
            statusCode: this.rawInputs.statusCode,
            message: this.rawInputs.message,
            details: this.rawInputs.details,
        };
    }
}

/**
 * Configuration class for KitHttpError.
 * Provides methods to configure the formatter function used by KitHttpError instances.
 */
export class KitHttpErrorConfig {
    /**
     * Configures a global formatter function for all instances of KitHttpError.
     * This formatter will be used to format error details unless an instance-specific formatter is provided.
     * When this method is called, KitHttpError-based errors will be used globally.
     * @param {(statusCode: number, message: string, details?: unknown, ...args: unknown[]) => unknown} formatter - A function to format error details, which takes the status code, message, optional details, and additional arguments as parameters.
     */
    static configureFormatter(formatter: IFormatter): void {
        KitHttpError._configureFormatter(formatter);
        useKitHttpErrors = true; // Switch to using KitHttpError-based errors globally
    }

    /**
     * Checks if KitHttpError-based errors are being used globally.
     *
     * @returns {boolean} True if KitHttpError-based errors are enabled globally, false otherwise.
     */
    static shouldUseKitHttpErrors(): boolean {
        return useKitHttpErrors;
    }
}

/**
 * Creates a new instance of the KitHttpError class with a status code of 400, Bad Request.
 * @extends KitHttpError
 */
export class BadRequestError extends KitHttpError {
    /**
     * Creates a new instance of the BadRequestError class.
     * @param {string} message - The error message. Defaults to "Bad Request" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_400 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_400).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

/**
 * Creates a new instance of the KitHttpError class with a status code of 401, Unauthorized.
 * @extends KitHttpError
 */
export class UnauthorizedError extends KitHttpError {
    /**
     * Creates a new instance of the UnauthorizedError class.
     * @param {string} [message] - The error message. Defaults to "Unauthorized" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_401 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_401).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 402, Payment Required.
 * @extends KitHttpError
 */
export class PaymentRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the PaymentRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Payment Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_402 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_402).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, PaymentRequiredError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 403, Forbidden.
 * @extends KitHttpError
 */
export class ForbiddenError extends KitHttpError {
    /**
     * Creates a new instance of the ForbiddenError class.
     * @param {string} [message] - The error message. Defaults to "Forbidden" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_403 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_403).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 404, Not Found.
 * @extends KitHttpError
 */
export class NotFoundError extends KitHttpError {
    /**
     * Creates a new instance of the NotFoundError class.
     * @param {string} [message] - The error message. Defaults to "Not Found" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_404 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_404).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 405, Method Not Allowed.
 * @extends KitHttpError
 */
export class MethodNotAllowedError extends KitHttpError {
    /**
     * Creates a new instance of the MethodNotAllowedError class.
     * @param {string} [message] - The error message. Defaults to "Method Not Allowed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_405 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_405).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, MethodNotAllowedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 406, Not Acceptable.
 * @extends KitHttpError
 */
export class NotAcceptableError extends KitHttpError {
    /**
     * Creates a new instance of the NotAcceptableError class.
     * @param {string} [message] - The error message. Defaults to "Not Acceptable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_406 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_406).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 407, Proxy Authentication Required.
 * @extends KitHttpError
 */
export class ProxyAuthenticationRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the ProxyAuthenticationRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Proxy Authentication Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_407 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_407).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ProxyAuthenticationRequiredError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 408, Request Timeout.
 * @extends KitHttpError
 */
export class RequestTimeoutError extends KitHttpError {
    /**
     * Creates a new instance of the RequestTimeoutError class.
     * @param {string} [message] - The error message. Defaults to "Request Timeout" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_408 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_408).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, RequestTimeoutError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 409, Conflict.
 * @extends KitHttpError
 */
export class ConflictError extends KitHttpError {
    /**
     * Creates a new instance of the ConflictError class.
     * @param {string} [message] - The error message. Defaults to "Conflict" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_409 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_409).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 410, Gone.
 * @extends KitHttpError
 */
export class GoneError extends KitHttpError {
    /**
     * Creates a new instance of the GoneError class.
     * @param {string} [message] - The error message. Defaults to "Gone" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_410 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_410).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, GoneError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 411, Length Required.
 * @extends KitHttpError
 */
export class LengthRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the LengthRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Length Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_411 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_411).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, LengthRequiredError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 412, Precondition Failed.
 * @extends KitHttpError
 */
export class PreconditionFailedError extends KitHttpError {
    /**
     * Creates a new instance of the PreconditionFailedError class.
     * @param {string} [message] - The error message. Defaults to "Precondition Failed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_412 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_412).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, PreconditionFailedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 413, Request Entity Too Large.
 * @extends KitHttpError
 */
export class RequestTooLongError extends KitHttpError {
    /**
     * Creates a new instance of the RequestTooLongError class.
     * @param {string} [message] - The error message. Defaults to "Request Entity Too Large" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_413 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_413).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, RequestTooLongError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 414, Request-URI Too Long.
 * @extends KitHttpError
 */
export class RequestUriTooLongError extends KitHttpError {
    /**
     * Creates a new instance of the RequestUriTooLongError class.
     * @param {string} [message] - The error message. Defaults to "Request-URI Too Long" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_414 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_414).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, RequestUriTooLongError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 415, Unsupported Media Type.
 * @extends KitHttpError
 */
export class UnsupportedMediaTypeError extends KitHttpError {
    /**
     * Creates a new instance of the UnsupportedMediaTypeError class.
     * @param {string} [message] - The error message. Defaults to "Unsupported Media Type" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_415 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_415).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, UnsupportedMediaTypeError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 416, Requested Range Not Satisfiable.
 * @extends KitHttpError
 */
export class RequestedRangeNotSatisfiableError extends KitHttpError {
    /**
     * Creates a new instance of the RequestedRangeNotSatisfiableError class.
     * @param {string} [message] - The error message. Defaults to "Requested Range Not Satisfiable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_416 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_416).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(
            this,
            RequestedRangeNotSatisfiableError.prototype
        );
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 417, Expectation Failed.
 * @extends KitHttpError
 */
export class ExpectationFailedError extends KitHttpError {
    /**
     * Creates a new instance of the ExpectationFailedError class.
     * @param {string} [message] - The error message. Defaults to "Expectation Failed" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_417 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_417).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ExpectationFailedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 418, I'm a teapot.
 * @extends KitHttpError
 */
export class ImATeapotError extends KitHttpError {
    /**
     * Creates a new instance of the ImATeapotError class.
     * @param {string} [message] - The error message. Defaults to "I'm a teapot" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_418 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_418).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ImATeapotError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 419, Insufficient Space on Resource.
 * @extends KitHttpError
 */
export class InsufficientSpaceOnResourceError extends KitHttpError {
    /**
     * Creates a new instance of the InsufficientSpaceOnResourceError class.
     * @param {string} [message] - The error message. Defaults to "Insufficient Space on Resource" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_419 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_419).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, InsufficientSpaceOnResourceError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 420, Method Failure.
 * @extends KitHttpError
 */
export class MethodFailureError extends KitHttpError {
    /**
     * Creates a new instance of the MethodFailureError class.
     * @param {string} [message] - The error message. Defaults to "Method Failure" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_420 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_420).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, MethodFailureError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 421, Misdirected Request.
 * @extends KitHttpError
 */
export class MisdirectedRequestError extends KitHttpError {
    /**
     * Creates a new instance of the MisdirectedRequestError class.
     * @param {string} [message] - The error message. Defaults to "Misdirected Request" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_421 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_421).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, MisdirectedRequestError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 422, Unprocessable Entity.
 * @extends KitHttpError
 */
export class UnprocessableEntityError extends KitHttpError {
    /**
     * Creates a new instance of the UnprocessableEntityError class.
     * @param {string} [message] - The error message. Defaults to "Unprocessable Entity" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_422 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_422).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, UnprocessableEntityError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 423, Locked.
 * @extends KitHttpError
 */
export class LockedError extends KitHttpError {
    /**
     * Creates a new instance of the LockedError class.
     * @param {string} [message] - The error message. Defaults to "Locked" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_423 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_423).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, LockedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 424, Failed Dependency.
 * @extends KitHttpError
 */
export class FailedDependencyError extends KitHttpError {
    /**
     * Creates a new instance of the FailedDependencyError class.
     * @param {string} [message] - The error message. Defaults to "Failed Dependency" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_424 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_424).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, FailedDependencyError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 425, Too Early.
 * @extends KitHttpError
 */
export class TooEarlyError extends KitHttpError {
    /**
     * Creates a new instance of the TooEarlyError class.
     * @param {string} [message] - The error message. Defaults to "Too Early" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_425 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_425).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, TooEarlyError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 426, Upgrade Required.
 * @extends KitHttpError
 */
export class UpgradeRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the UpgradeRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Upgrade Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_426 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_426).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 428, Precondition Required.
 * @extends KitHttpError
 */
export class PreconditionRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the PreconditionRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Precondition Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_428 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_428).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, PreconditionRequiredError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 429, Too Many Requests.
 * @extends KitHttpError
 */
export class TooManyRequestsError extends KitHttpError {
    /**
     * Creates a new instance of the TooManyRequestsError class.
     * @param {string} [message] - The error message. Defaults to "Too Many Requests" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_429 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_429).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 431, Request Header Fields Too Large.
 * @extends KitHttpError
 */
export class RequestHeaderFieldsTooLargeError extends KitHttpError {
    /**
     * Creates a new instance of the RequestHeaderFieldsTooLargeError class.
     * @param {string} [message] - The error message. Defaults to "Request Header Fields Too Large" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_431 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_431).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 451, Unavailable For Legal Reasons.
 * @extends KitHttpError
 */
export class UnavailableForLegalReasonsError extends KitHttpError {
    /**
     * Creates a new instance of the UnavailableForLegalReasonsError class.
     * @param {string} [message] - The error message. Defaults to "Unavailable For Legal Reasons" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_451 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_451).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, UnavailableForLegalReasonsError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 500, Internal Server Error.
 * @extends KitHttpError
 */
export class InternalServerError extends KitHttpError {
    /**
     * Creates a new instance of the InternalServerError class.
     * @param {string} [message] - The error message. Defaults to "Internal Server Error" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_500 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_500).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 501, Not Implemented.
 * @extends KitHttpError
 */
export class NotImplementedError extends KitHttpError {
    /**
     * Creates a new instance of the NotImplementedError class.
     * @param {string} [message] - The error message. Defaults to "Not Implemented" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_501 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_501).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 502, Bad Gateway.
 * @extends KitHttpError
 */
export class BadGatewayError extends KitHttpError {
    /**
     * Creates a new instance of the BadGatewayError class.
     * @param {string} [message] - The error message. Defaults to "Bad Gateway" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_502 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_502).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, BadGatewayError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 503, Service Unavailable.
 * @extends KitHttpError
 */
export class ServiceUnavailableError extends KitHttpError {
    /**
     * Creates a new instance of the ServiceUnavailableError class.
     * @param {string} [message] - The error message. Defaults to "Service Unavailable" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_503 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_503).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 504, Gateway Timeout.
 * @extends KitHttpError
 */
export class GatewayTimeoutError extends KitHttpError {
    /**
     * Creates a new instance of the GatewayTimeoutError class.
     * @param {string} [message] - The error message. Defaults to "Gateway Timeout" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_504 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_504).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, GatewayTimeoutError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 505, HTTP Version Not Supported.
 * @extends KitHttpError
 */
export class HttpVersionNotSupportedError extends KitHttpError {
    /**
     * Creates a new instance of the HttpVersionNotSupportedError class.
     * @param {string} [message] - The error message. Defaults to "HTTP Version Not Supported" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_505 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_505).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, HttpVersionNotSupportedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 506, Variant Also Negotiates.
 * @extends KitHttpError
 */
export class VariantAlsoNegotiatesError extends KitHttpError {
    /**
     * Creates a new instance of the VariantAlsoNegotiatesError class.
     * @param {string} [message] - The error message. Defaults to "Variant Also Negotiates" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_506 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_506).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, VariantAlsoNegotiatesError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 507, Insufficient Storage.
 * @extends KitHttpError
 */
export class InsufficientStorageError extends KitHttpError {
    /**
     * Creates a new instance of the InsufficientStorageError class.
     * @param {string} [message] - The error message. Defaults to "Insufficient Storage" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_507 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_507).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, InsufficientStorageError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 508, Loop Detected.
 * @extends KitHttpError
 */
export class LoopDetectedError extends KitHttpError {
    /**
     * Creates a new instance of the LoopDetectedError class.
     * @param {string} [message] - The error message. Defaults to "Loop Detected" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_508 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_508).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, LoopDetectedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 510, Not Extended.
 * @extends KitHttpError
 */
export class NotExtendedError extends KitHttpError {
    /**
     * Creates a new instance of the NotExtendedError class.
     * @param {string} [message] - The error message. Defaults to "Not Extended" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_510 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_510).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(this, NotExtendedError.prototype);
    }
}
/**
 * Creates a new instance of the KitHttpError class with a status code of 511, Network Authentication Required.
 * @extends KitHttpError
 */
export class NetworkAuthenticationRequiredError extends KitHttpError {
    /**
     * Creates a new instance of the NetworkAuthenticationRequiredError class.
     * @param {string} [message] - The error message. Defaults to "Network Authentication Required" if not provided.
     * @param {any} [details] - Additional error details.
     * @param {...any} args - Additional arguments to pass to the formatter function.
     */
    constructor(message?: string, details?: unknown, ...args: unknown[]) {
        /* istanbul ignore next */
        super(
            /* eslint-disable-next-line */
            STATUS_CODES.HTTP_CODE_511 as number,
            /* eslint-disable-next-line */
            message ??
                /* eslint-disable-next-line */
                getStatusDescription(STATUS_CODES.HTTP_CODE_511).toString(),
            details,
            ...args
        );
        Object.setPrototypeOf(
            this,
            NetworkAuthenticationRequiredError.prototype
        );
    }
}
