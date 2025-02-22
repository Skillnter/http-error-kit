/**
 * A formatter function that takes in a status code, message, details, and additional arguments,
 * and returns a formatted output.
 *
 * @typedef {function} IFormatter
 * @param {number} statusCode - The HTTP status code.
 * @param {string} message - The error message.
 * @param {unknown} details - Additional details about the error.
 * @param {...unknown} args - Additional arguments to be passed to the formatter.
 * @returns {unknown} The formatted output.
 */
export type IFormatter = (
    /* eslint-disable-next-line no-unused-vars */
    statusCode: number,

    /* eslint-disable-next-line no-unused-vars */
    message: string,

    /* eslint-disable-next-line no-unused-vars */
    details: unknown,

    /* eslint-disable-next-line no-unused-vars */
    ...args: unknown[]
) => unknown;
