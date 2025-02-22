/**
 * Represents the raw input data for an HTTP error.
 * @interface
 */
export interface IRawInput {
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
     * @type {unknown}
     */
    details: unknown;

    /**
     * Additional arguments associated with the error.
     * @type {unknown[]}
     */
    args: unknown[];
}
