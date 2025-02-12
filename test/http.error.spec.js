const assert = require("assert");
const { KitHttpError } = require("../dist/http.error.js");
const STATUS_CODES = require("http-response-status-code");

describe("*** Testing KitHttpError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        );
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        );
        assert(test instanceof KitHttpError);
    });
});

describe("*** Testing BadRequestError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).BadRequestError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).BadRequestError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 400 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).BadRequestError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_400
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_400);
    });
});

describe("*** Testing UnauthorizedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnauthorizedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).UnauthorizedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 401 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnauthorizedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_401
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_401);
    });
});

describe("*** Testing PaymentRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PaymentRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).PaymentRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 402 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PaymentRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_402
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_402);
    });
});

describe("*** Testing ForbiddenError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ForbiddenError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ForbiddenError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 403 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ForbiddenError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_403
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_403);
    });
});

describe("*** Testing NotFoundError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotFoundError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).NotFoundError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 404 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotFoundError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_404
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_404);
    });
});

describe("*** Testing MethodNotAllowedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MethodNotAllowedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).MethodNotAllowedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 405 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MethodNotAllowedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_405
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_405);
    });
});

describe("*** Testing NotAcceptableError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotAcceptableError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).NotAcceptableError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 406 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotAcceptableError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_406
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_406);
    });
});

describe("*** Testing ProxyAuthenticationRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ProxyAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ProxyAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 407 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ProxyAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_407
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_407);
    });
});

describe("*** Testing RequestTimeoutError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestTimeoutError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).RequestTimeoutError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 408 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestTimeoutError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_408
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_408);
    });
});

describe("*** Testing ConflictError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ConflictError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ConflictError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 409 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ConflictError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_409
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_409);
    });
});

describe("*** Testing GoneError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).GoneError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).GoneError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 410 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).GoneError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_410
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_410);
    });
});

describe("*** Testing LengthRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LengthRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).LengthRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 411 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LengthRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_411
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_411);
    });
});

describe("*** Testing PreconditionFailedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PreconditionFailedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).PreconditionFailedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 412 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PreconditionFailedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_412
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_412);
    });
});

describe("*** Testing RequestTooLongError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestTooLongError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).RequestTooLongError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 413 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestTooLongError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_413
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_413);
    });
});

describe("*** Testing RequestUriTooLongError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestUriTooLongError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).RequestUriTooLongError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 414 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestUriTooLongError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_414
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_414);
    });
});

describe("*** Testing UnsupportedMediaTypeError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnsupportedMediaTypeError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).UnsupportedMediaTypeError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 415 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnsupportedMediaTypeError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_415
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_415);
    });
});

describe("*** Testing RequestedRangeNotSatisfiableError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestedRangeNotSatisfiableError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).RequestedRangeNotSatisfiableError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 416 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestedRangeNotSatisfiableError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_416
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_416);
    });
});

describe("*** Testing ExpectationFailedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ExpectationFailedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ExpectationFailedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 417 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ExpectationFailedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_417
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_417);
    });
});

describe("*** Testing ImATeapotError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ImATeapotError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ImATeapotError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 418 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ImATeapotError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_418
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_418);
    });
});

describe("*** Testing InsufficientSpaceOnResourceError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InsufficientSpaceOnResourceError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).InsufficientSpaceOnResourceError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 419 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InsufficientSpaceOnResourceError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_419
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_419);
    });
});

describe("*** Testing MethodFailureError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MethodFailureError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).MethodFailureError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 420 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MethodFailureError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_420
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_420);
    });
});

describe("*** Testing MisdirectedRequestError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MisdirectedRequestError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).MisdirectedRequestError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 421 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).MisdirectedRequestError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_421
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_421);
    });
});

describe("*** Testing UnprocessableEntityError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnprocessableEntityError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).UnprocessableEntityError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 422 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnprocessableEntityError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_422
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_422);
    });
});

describe("*** Testing LockedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LockedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).LockedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 423 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LockedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_423
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_423);
    });
});

describe("*** Testing FailedDependencyError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).FailedDependencyError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).FailedDependencyError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 424 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).FailedDependencyError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_424
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_424);
    });
});

describe("*** Testing TooEarlyError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).TooEarlyError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).TooEarlyError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 425 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).TooEarlyError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_425
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_425);
    });
});

describe("*** Testing UpgradeRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UpgradeRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).UpgradeRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 426 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UpgradeRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_426
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_426);
    });
});

describe("*** Testing PreconditionRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PreconditionRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).PreconditionRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 428 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).PreconditionRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_428
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_428);
    });
});

describe("*** Testing TooManyRequestsError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).TooManyRequestsError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).TooManyRequestsError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 429 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).TooManyRequestsError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_429
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_429);
    });
});

describe("*** Testing RequestHeaderFieldsTooLargeError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestHeaderFieldsTooLargeError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).RequestHeaderFieldsTooLargeError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 431 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).RequestHeaderFieldsTooLargeError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_431
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_431);
    });
});

describe("*** Testing UnavailableForLegalReasonsError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnavailableForLegalReasonsError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).UnavailableForLegalReasonsError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 451 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).UnavailableForLegalReasonsError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_451
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_451);
    });
});

describe("*** Testing InternalServerErrorError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InternalServerErrorError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).InternalServerErrorError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 500 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InternalServerErrorError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_500
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_500);
    });
});

describe("*** Testing NotImplementedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotImplementedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).NotImplementedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 501 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotImplementedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_501
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_501);
    });
});

describe("*** Testing BadGatewayError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).BadGatewayError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).BadGatewayError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 502 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).BadGatewayError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_502
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_502);
    });
});

describe("*** Testing ServiceUnavailableError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ServiceUnavailableError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).ServiceUnavailableError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 503 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).ServiceUnavailableError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_503
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_503);
    });
});

describe("*** Testing GatewayTimeoutError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).GatewayTimeoutError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).GatewayTimeoutError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 504 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).GatewayTimeoutError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_504
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_504);
    });
});

describe("*** Testing HttpVersionNotSupportedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).HttpVersionNotSupportedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).HttpVersionNotSupportedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 505 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).HttpVersionNotSupportedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_505
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_505);
    });
});

describe("*** Testing VariantAlsoNegotiatesError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).VariantAlsoNegotiatesError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).VariantAlsoNegotiatesError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 506 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).VariantAlsoNegotiatesError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_506
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_506);
    });
});

describe("*** Testing InsufficientStorageError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InsufficientStorageError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).InsufficientStorageError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 507 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).InsufficientStorageError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_507
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_507);
    });
});

describe("*** Testing LoopDetectedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LoopDetectedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).LoopDetectedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 508 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).LoopDetectedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_508
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_508);
    });
});

describe("*** Testing NotExtendedError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotExtendedError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).NotExtendedError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 510 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NotExtendedError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_510
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_510);
    });
});

describe("*** Testing NetworkAuthenticationRequiredError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NetworkAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            (statusCode, message, details) => ({
                statusCode,
                message,
                details,
            })
        ).NetworkAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
    });

    it("Should have message and statusCode as per 511 HTTP status code", function () {
        const test = new KitHttpError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        ).NetworkAuthenticationRequiredError();
        assert(test instanceof KitHttpError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_511
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_511);
    });
});
