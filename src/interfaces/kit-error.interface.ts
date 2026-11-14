import { IRawInput } from "./input.interface";
import { IFormatter } from "../types/formatter.type";

/**
 * Common interface representing any Kit error instance (KitHttpError, KitGeneralError, or named error class).
 * @interface
 */
export interface IKitError extends Error {
    /**
     * The HTTP status code associated with the error.
     */
    statusCode?: number;

    /**
     * Additional details about the error, if any.
     */
    details?: unknown;

    /**
     * HTTP response headers associated with this error (e.g. WWW-Authenticate, Retry-After).
     */
    headers?: Record<string, string>;

    /**
     * Sets a response header for this error instance.
     * @param {string} name - The header field name.
     * @param {string} value - The header field value.
     * @returns {this} The current instance for method chaining.
     */
    setHeader(name: string, value: string): this;

    /**
     * Sets multiple response headers for this error instance.
     * @param {Record<string, string>} headers - Key-value pairs of response headers.
     * @returns {this} The current instance for method chaining.
     */
    setHeaders(headers: Record<string, string>): this;

    /**
     * Converts this error instance into a WHATWG standard Fetch Response object.
     * Compatible with Next.js App Router, Cloudflare Workers, Hono, Bun, and modern Node.js runtimes.
     *
     * @param {ResponseInit} [init] - Optional ResponseInit configuration to override or supplement the response.
     * @returns {Response} A Fetch API Response instance containing the serialized error body and HTTP status.
     */
    toResponse(init?: ResponseInit): Response;

    /**
     * Returns the raw input data associated with this instance.
     * @returns {IRawInput} The raw input data associated with this instance.
     */
    getInputs(): IRawInput;

    /**
     * Returns a JSON-compatible object representation of this instance.
     * @returns {unknown} A JSON-compatible object representation of this instance.
     */
    toJSON(): unknown;

    /**
     * Sets an instance-specific formatter function (supported on KitHttpError instances).
     * @param {IFormatter} formatter - The formatter function.
     * @returns {this} The current instance for method chaining.
     */
    setFormatter?(formatter: IFormatter): this;
}

