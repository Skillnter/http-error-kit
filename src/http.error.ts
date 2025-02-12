import * as STATUS_CODES from "http-response-status-code";

/**
 * Represents a general error with a status code, message, and optional details.
 * @extends {Error}
 */
export class KitHttpError extends Error {
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
     * A custom formatter function that can be used to format the error details.
     * @type {(statusCode: number, message: string, details: any, ...args: any[]) => any}
     */
    formatter?: (
        statusCode: number,
        message: string,
        details: any,
        ...args: any[]
    ) => any;

    /**
     * Initializes a new instance of the KitHttpError class.
     * @param {number} statusCode - The HTTP status code associated with the error.
     * @param {string} message - A human-readable error message.
     * @param {*} details - Additional details about the error, if any.
     */
    constructor(
        statusCode: number,
        message: string,
        details: unknown = {},
        formatter?: (
            // tslint:disable-next-line:no-unused-variable
            statusCode: number,
            // tslint:disable-next-line:no-unused-variable
            message: string,
            // tslint:disable-next-line:no-unused-variable
            details: unknown,
            // tslint:disable-next-line:no-unused-variable
            ...args: unknown[]
        ) => unknown,
        ...args: unknown[]
    ) {
        super(message);
        if (formatter) {
            this.formatter = formatter;
            Object.assign(
                this,
                formatter(statusCode, message, details, ...args)
            );
        } else {
            this.statusCode = this.statusCode = statusCode;
            this.message = message;
            this.details = details;
        }
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 400, Bad Request.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 400.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    BadRequestError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_400
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_400,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_400;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 401, Unauthorized.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 401.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    UnauthorizedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_401
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_401,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_401;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 402, Payment Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 402.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    PaymentRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_402
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_402,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_402;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 403, Forbidden.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 403.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ForbiddenError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_403
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_403,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_403;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 404, Not Found.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 404.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    NotFoundError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_404
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_404,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_404;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 405, Method Not Allowed.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 405.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    MethodNotAllowedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_405
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_405,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_405;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 406, Not Acceptable.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 406.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    NotAcceptableError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_406
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_406,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_406;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 407, Proxy Authentication Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 407.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ProxyAuthenticationRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_407
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_407,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_407;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 408, Request Timeout.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 408.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    RequestTimeoutError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_408
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_408,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_408;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 409, Conflict.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 409.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ConflictError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_409
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_409,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_409;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 410, Gone.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 410.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    GoneError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_410
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_410,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_410;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 411, Length Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 411.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    LengthRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_411
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_411,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_411;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 412, Precondition Failed.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 412.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    PreconditionFailedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_412
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_412,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_412;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 413, Request Too Long.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 413.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    RequestTooLongError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_413
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_413,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_413;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 414, Request Uri Too Long.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 414.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    RequestUriTooLongError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_414
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_414,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_414;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 415, Unsupported Media Type.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 415.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    UnsupportedMediaTypeError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_415
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_415,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_415;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 416, Requested Range Not Satisfiable.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 416.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    RequestedRangeNotSatisfiableError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_416
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_416,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_416;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 417, Expectation Failed.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 417.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ExpectationFailedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_417
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_417,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_417;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 418, Im A Teapot.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 418.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ImATeapotError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_418
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_418,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_418;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 419, Insufficient Space On Resource.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 419.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    InsufficientSpaceOnResourceError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_419
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_419,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_419;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 420, Method Failure.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 420.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    MethodFailureError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_420
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_420,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_420;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 421, Misdirected Request.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 421.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    MisdirectedRequestError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_421
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_421,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_421;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 422, Unprocessable Entity.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 422.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    UnprocessableEntityError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_422
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_422,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_422;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 423, Locked.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 423.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    LockedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_423
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_423,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_423;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 424, Failed Dependency.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 424.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    FailedDependencyError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_424
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_424,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_424;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 425, Too Early.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 425.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    TooEarlyError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_425
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_425,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_425;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 426, Upgrade Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 426.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    UpgradeRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_426
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_426,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_426;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 428, Precondition Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 428.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    PreconditionRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_428
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_428,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_428;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 429, Too Many Requests.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 429.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    TooManyRequestsError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_429
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_429,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_429;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 431, Request Header Fields Too Large.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 431.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    RequestHeaderFieldsTooLargeError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_431
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_431,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_431;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 451, Unavailable For Legal Reasons.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 451.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    UnavailableForLegalReasonsError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_451
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_451,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_451;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 500, Internal Server Error.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 500.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    InternalServerErrorError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_500
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_500,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_500;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 501, Not Implemented.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 501.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    NotImplementedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_501
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_501,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_501;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 502, Bad Gateway.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 502.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    BadGatewayError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_502
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_502,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_502;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 503, Service Unavailable.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 503.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    ServiceUnavailableError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_503
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_503,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_503;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 504, Gateway Timeout.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 504.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    GatewayTimeoutError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_504
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_504,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_504;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 505, Http Version Not Supported.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 505.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    HttpVersionNotSupportedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_505
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_505,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_505;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 506, Variant Also Negotiates.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 506.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    VariantAlsoNegotiatesError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_506
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_506,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_506;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 507, Insufficient Storage.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 507.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    InsufficientStorageError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_507
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_507,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_507;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 508, Loop Detected.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 508.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    LoopDetectedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_508
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_508,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_508;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 510, Not Extended.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 510.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    NotExtendedError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_510
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_510,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_510;
            this.message = message;
            this.details = details;
        }
        return this;
    }

    /**
     * Creates a new instance of the KitHttpError class with a status code of 511, Network Authentication Required.
     * @param {string} message - A human-readable error message. Defaults to the HTTP status code description for 511.
     * @param {string} details - Additional details about the error, if any.
     * @return {KitHttpError} A new instance of the KitHttpError class.
     */
    NetworkAuthenticationRequiredError(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        message: string = STATUS_CODES.getStatusDescription(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            STATUS_CODES.CODES.HTTP_CODE_511
        ),
        details?: string,
        ...args: any[]
    ): this {
        if (this.formatter) {
            Object.assign(
                this,
                this.formatter(
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    STATUS_CODES.CODES.HTTP_CODE_511,
                    message,
                    details,
                    ...args
                )
            );
        } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this.statusCode = STATUS_CODES.CODES.HTTP_CODE_511;
            this.message = message;
            this.details = details;
        }
        return this;
    }
}
