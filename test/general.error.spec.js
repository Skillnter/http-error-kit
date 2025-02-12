const assert = require("assert");
const {
    KitGeneralError,
    BadRequestError,
    UnauthorizedError,
    PaymentRequiredError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    NotAcceptableError,
    ProxyAuthenticationRequiredError,
    RequestTimeoutError,
    ConflictError,
    GoneError,
    LengthRequiredError,
    PreconditionFailedError,
    RequestTooLongError,
    RequestUriTooLongError,
    UnsupportedMediaTypeError,
    RequestedRangeNotSatisfiableError,
    ExpectationFailedError,
    ImATeapotError,
    InsufficientSpaceOnResourceError,
    MethodFailureError,
    MisdirectedRequestError,
    UnprocessableEntityError,
    LockedError,
    FailedDependencyError,
    TooEarlyError,
    UpgradeRequiredError,
    PreconditionRequiredError,
    TooManyRequestsError,
    RequestHeaderFieldsTooLargeError,
    UnavailableForLegalReasonsError,
    InternalServerErrorError,
    NotImplementedError,
    BadGatewayError,
    ServiceUnavailableError,
    GatewayTimeoutError,
    HttpVersionNotSupportedError,
    VariantAlsoNegotiatesError,
    InsufficientStorageError,
    LoopDetectedError,
    NotExtendedError,
    NetworkAuthenticationRequiredError,
} = require("../dist/general.error.js");
const STATUS_CODES = require("http-response-status-code");

describe("*** Testing KitGeneralError ***", function () {
    it("Should be an instance of KitGeneralError", function () {
        const test = new KitGeneralError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitGeneralError"
        );
        assert(test instanceof KitGeneralError);
    });
});

describe("*** Testing BadRequestError ***", function () {
    it("Should be an instance of BadRequestError", function () {
        const test = new BadRequestError();
        assert(test instanceof BadRequestError);
    });

    it("Should have message and statusCode as per 400 HTTP status code", function () {
        const test = new BadRequestError();
        assert(test instanceof BadRequestError);
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
    it("Should be an instance of UnauthorizedError", function () {
        const test = new UnauthorizedError();
        assert(test instanceof UnauthorizedError);
    });

    it("Should have message and statusCode as per 401 HTTP status code", function () {
        const test = new UnauthorizedError();
        assert(test instanceof UnauthorizedError);
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
    it("Should be an instance of PaymentRequiredError", function () {
        const test = new PaymentRequiredError();
        assert(test instanceof PaymentRequiredError);
    });

    it("Should have message and statusCode as per 402 HTTP status code", function () {
        const test = new PaymentRequiredError();
        assert(test instanceof PaymentRequiredError);
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
    it("Should be an instance of ForbiddenError", function () {
        const test = new ForbiddenError();
        assert(test instanceof ForbiddenError);
    });

    it("Should have message and statusCode as per 403 HTTP status code", function () {
        const test = new ForbiddenError();
        assert(test instanceof ForbiddenError);
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
    it("Should be an instance of NotFoundError", function () {
        const test = new NotFoundError();
        assert(test instanceof NotFoundError);
    });

    it("Should have message and statusCode as per 404 HTTP status code", function () {
        const test = new NotFoundError();
        assert(test instanceof NotFoundError);
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
    it("Should be an instance of MethodNotAllowedError", function () {
        const test = new MethodNotAllowedError();
        assert(test instanceof MethodNotAllowedError);
    });

    it("Should have message and statusCode as per 405 HTTP status code", function () {
        const test = new MethodNotAllowedError();
        assert(test instanceof MethodNotAllowedError);
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
    it("Should be an instance of NotAcceptableError", function () {
        const test = new NotAcceptableError();
        assert(test instanceof NotAcceptableError);
    });

    it("Should have message and statusCode as per 406 HTTP status code", function () {
        const test = new NotAcceptableError();
        assert(test instanceof NotAcceptableError);
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
    it("Should be an instance of ProxyAuthenticationRequiredError", function () {
        const test = new ProxyAuthenticationRequiredError();
        assert(test instanceof ProxyAuthenticationRequiredError);
    });

    it("Should have message and statusCode as per 407 HTTP status code", function () {
        const test = new ProxyAuthenticationRequiredError();
        assert(test instanceof ProxyAuthenticationRequiredError);
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
    it("Should be an instance of RequestTimeoutError", function () {
        const test = new RequestTimeoutError();
        assert(test instanceof RequestTimeoutError);
    });

    it("Should have message and statusCode as per 408 HTTP status code", function () {
        const test = new RequestTimeoutError();
        assert(test instanceof RequestTimeoutError);
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
    it("Should be an instance of ConflictError", function () {
        const test = new ConflictError();
        assert(test instanceof ConflictError);
    });

    it("Should have message and statusCode as per 409 HTTP status code", function () {
        const test = new ConflictError();
        assert(test instanceof ConflictError);
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
    it("Should be an instance of GoneError", function () {
        const test = new GoneError();
        assert(test instanceof GoneError);
    });

    it("Should have message and statusCode as per 410 HTTP status code", function () {
        const test = new GoneError();
        assert(test instanceof GoneError);
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
    it("Should be an instance of LengthRequiredError", function () {
        const test = new LengthRequiredError();
        assert(test instanceof LengthRequiredError);
    });

    it("Should have message and statusCode as per 411 HTTP status code", function () {
        const test = new LengthRequiredError();
        assert(test instanceof LengthRequiredError);
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
    it("Should be an instance of PreconditionFailedError", function () {
        const test = new PreconditionFailedError();
        assert(test instanceof PreconditionFailedError);
    });

    it("Should have message and statusCode as per 412 HTTP status code", function () {
        const test = new PreconditionFailedError();
        assert(test instanceof PreconditionFailedError);
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
    it("Should be an instance of RequestTooLongError", function () {
        const test = new RequestTooLongError();
        assert(test instanceof RequestTooLongError);
    });

    it("Should have message and statusCode as per 413 HTTP status code", function () {
        const test = new RequestTooLongError();
        assert(test instanceof RequestTooLongError);
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
    it("Should be an instance of RequestUriTooLongError", function () {
        const test = new RequestUriTooLongError();
        assert(test instanceof RequestUriTooLongError);
    });

    it("Should have message and statusCode as per 414 HTTP status code", function () {
        const test = new RequestUriTooLongError();
        assert(test instanceof RequestUriTooLongError);
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
    it("Should be an instance of UnsupportedMediaTypeError", function () {
        const test = new UnsupportedMediaTypeError();
        assert(test instanceof UnsupportedMediaTypeError);
    });

    it("Should have message and statusCode as per 415 HTTP status code", function () {
        const test = new UnsupportedMediaTypeError();
        assert(test instanceof UnsupportedMediaTypeError);
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
    it("Should be an instance of RequestedRangeNotSatisfiableError", function () {
        const test = new RequestedRangeNotSatisfiableError();
        assert(test instanceof RequestedRangeNotSatisfiableError);
    });

    it("Should have message and statusCode as per 416 HTTP status code", function () {
        const test = new RequestedRangeNotSatisfiableError();
        assert(test instanceof RequestedRangeNotSatisfiableError);
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
    it("Should be an instance of ExpectationFailedError", function () {
        const test = new ExpectationFailedError();
        assert(test instanceof ExpectationFailedError);
    });

    it("Should have message and statusCode as per 417 HTTP status code", function () {
        const test = new ExpectationFailedError();
        assert(test instanceof ExpectationFailedError);
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
    it("Should be an instance of ImATeapotError", function () {
        const test = new ImATeapotError();
        assert(test instanceof ImATeapotError);
    });

    it("Should have message and statusCode as per 418 HTTP status code", function () {
        const test = new ImATeapotError();
        assert(test instanceof ImATeapotError);
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
    it("Should be an instance of InsufficientSpaceOnResourceError", function () {
        const test = new InsufficientSpaceOnResourceError();
        assert(test instanceof InsufficientSpaceOnResourceError);
    });

    it("Should have message and statusCode as per 419 HTTP status code", function () {
        const test = new InsufficientSpaceOnResourceError();
        assert(test instanceof InsufficientSpaceOnResourceError);
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
    it("Should be an instance of MethodFailureError", function () {
        const test = new MethodFailureError();
        assert(test instanceof MethodFailureError);
    });

    it("Should have message and statusCode as per 420 HTTP status code", function () {
        const test = new MethodFailureError();
        assert(test instanceof MethodFailureError);
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
    it("Should be an instance of MisdirectedRequestError", function () {
        const test = new MisdirectedRequestError();
        assert(test instanceof MisdirectedRequestError);
    });

    it("Should have message and statusCode as per 421 HTTP status code", function () {
        const test = new MisdirectedRequestError();
        assert(test instanceof MisdirectedRequestError);
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
    it("Should be an instance of UnprocessableEntityError", function () {
        const test = new UnprocessableEntityError();
        assert(test instanceof UnprocessableEntityError);
    });

    it("Should have message and statusCode as per 422 HTTP status code", function () {
        const test = new UnprocessableEntityError();
        assert(test instanceof UnprocessableEntityError);
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
    it("Should be an instance of LockedError", function () {
        const test = new LockedError();
        assert(test instanceof LockedError);
    });

    it("Should have message and statusCode as per 423 HTTP status code", function () {
        const test = new LockedError();
        assert(test instanceof LockedError);
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
    it("Should be an instance of FailedDependencyError", function () {
        const test = new FailedDependencyError();
        assert(test instanceof FailedDependencyError);
    });

    it("Should have message and statusCode as per 424 HTTP status code", function () {
        const test = new FailedDependencyError();
        assert(test instanceof FailedDependencyError);
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
    it("Should be an instance of TooEarlyError", function () {
        const test = new TooEarlyError();
        assert(test instanceof TooEarlyError);
    });

    it("Should have message and statusCode as per 425 HTTP status code", function () {
        const test = new TooEarlyError();
        assert(test instanceof TooEarlyError);
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
    it("Should be an instance of UpgradeRequiredError", function () {
        const test = new UpgradeRequiredError();
        assert(test instanceof UpgradeRequiredError);
    });

    it("Should have message and statusCode as per 426 HTTP status code", function () {
        const test = new UpgradeRequiredError();
        assert(test instanceof UpgradeRequiredError);
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
    it("Should be an instance of PreconditionRequiredError", function () {
        const test = new PreconditionRequiredError();
        assert(test instanceof PreconditionRequiredError);
    });

    it("Should have message and statusCode as per 428 HTTP status code", function () {
        const test = new PreconditionRequiredError();
        assert(test instanceof PreconditionRequiredError);
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
    it("Should be an instance of TooManyRequestsError", function () {
        const test = new TooManyRequestsError();
        assert(test instanceof TooManyRequestsError);
    });

    it("Should have message and statusCode as per 429 HTTP status code", function () {
        const test = new TooManyRequestsError();
        assert(test instanceof TooManyRequestsError);
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
    it("Should be an instance of RequestHeaderFieldsTooLargeError", function () {
        const test = new RequestHeaderFieldsTooLargeError();
        assert(test instanceof RequestHeaderFieldsTooLargeError);
    });

    it("Should have message and statusCode as per 431 HTTP status code", function () {
        const test = new RequestHeaderFieldsTooLargeError();
        assert(test instanceof RequestHeaderFieldsTooLargeError);
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
    it("Should be an instance of UnavailableForLegalReasonsError", function () {
        const test = new UnavailableForLegalReasonsError();
        assert(test instanceof UnavailableForLegalReasonsError);
    });

    it("Should have message and statusCode as per 451 HTTP status code", function () {
        const test = new UnavailableForLegalReasonsError();
        assert(test instanceof UnavailableForLegalReasonsError);
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
    it("Should be an instance of InternalServerErrorError", function () {
        const test = new InternalServerErrorError();
        assert(test instanceof InternalServerErrorError);
    });

    it("Should have message and statusCode as per 500 HTTP status code", function () {
        const test = new InternalServerErrorError();
        assert(test instanceof InternalServerErrorError);
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
    it("Should be an instance of NotImplementedError", function () {
        const test = new NotImplementedError();
        assert(test instanceof NotImplementedError);
    });

    it("Should have message and statusCode as per 501 HTTP status code", function () {
        const test = new NotImplementedError();
        assert(test instanceof NotImplementedError);
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
    it("Should be an instance of BadGatewayError", function () {
        const test = new BadGatewayError();
        assert(test instanceof BadGatewayError);
    });

    it("Should have message and statusCode as per 502 HTTP status code", function () {
        const test = new BadGatewayError();
        assert(test instanceof BadGatewayError);
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
    it("Should be an instance of ServiceUnavailableError", function () {
        const test = new ServiceUnavailableError();
        assert(test instanceof ServiceUnavailableError);
    });

    it("Should have message and statusCode as per 503 HTTP status code", function () {
        const test = new ServiceUnavailableError();
        assert(test instanceof ServiceUnavailableError);
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
    it("Should be an instance of GatewayTimeoutError", function () {
        const test = new GatewayTimeoutError();
        assert(test instanceof GatewayTimeoutError);
    });

    it("Should have message and statusCode as per 504 HTTP status code", function () {
        const test = new GatewayTimeoutError();
        assert(test instanceof GatewayTimeoutError);
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
    it("Should be an instance of HttpVersionNotSupportedError", function () {
        const test = new HttpVersionNotSupportedError();
        assert(test instanceof HttpVersionNotSupportedError);
    });

    it("Should have message and statusCode as per 505 HTTP status code", function () {
        const test = new HttpVersionNotSupportedError();
        assert(test instanceof HttpVersionNotSupportedError);
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
    it("Should be an instance of VariantAlsoNegotiatesError", function () {
        const test = new VariantAlsoNegotiatesError();
        assert(test instanceof VariantAlsoNegotiatesError);
    });

    it("Should have message and statusCode as per 506 HTTP status code", function () {
        const test = new VariantAlsoNegotiatesError();
        assert(test instanceof VariantAlsoNegotiatesError);
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
    it("Should be an instance of InsufficientStorageError", function () {
        const test = new InsufficientStorageError();
        assert(test instanceof InsufficientStorageError);
    });

    it("Should have message and statusCode as per 507 HTTP status code", function () {
        const test = new InsufficientStorageError();
        assert(test instanceof InsufficientStorageError);
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
    it("Should be an instance of LoopDetectedError", function () {
        const test = new LoopDetectedError();
        assert(test instanceof LoopDetectedError);
    });

    it("Should have message and statusCode as per 508 HTTP status code", function () {
        const test = new LoopDetectedError();
        assert(test instanceof LoopDetectedError);
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
    it("Should be an instance of NotExtendedError", function () {
        const test = new NotExtendedError();
        assert(test instanceof NotExtendedError);
    });

    it("Should have message and statusCode as per 510 HTTP status code", function () {
        const test = new NotExtendedError();
        assert(test instanceof NotExtendedError);
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
    it("Should be an instance of NetworkAuthenticationRequiredError", function () {
        const test = new NetworkAuthenticationRequiredError();
        assert(test instanceof NetworkAuthenticationRequiredError);
    });

    it("Should have message and statusCode as per 511 HTTP status code", function () {
        const test = new NetworkAuthenticationRequiredError();
        assert(test instanceof NetworkAuthenticationRequiredError);
        assert(
            test.message ===
                STATUS_CODES.getStatusDescription(
                    STATUS_CODES.CODES.HTTP_CODE_511
                )
        );
        assert(test.statusCode === STATUS_CODES.CODES.HTTP_CODE_511);
    });
});
