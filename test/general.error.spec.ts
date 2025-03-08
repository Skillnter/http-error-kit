import {
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
    InternalServerError,
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
} from "../src/general.error";
const STATUS_CODES = require("http-response-status-code");

describe("*** Testing KitGeneralError ***", function () {
    it("Should be an instance of KitGeneralError", function () {
        const test = new KitGeneralError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitGeneralError"
        );
        expect(test instanceof KitGeneralError);
        expect(test.message).toBe("Testing KitGeneralError");
    });
    it("Should return raw inputs", function () {
        const test = new KitGeneralError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitGeneralError"
        );
        const rawInputs = test.getInputs();
        expect(test instanceof KitGeneralError);
        expect(typeof rawInputs).toBe("object");
        expect(rawInputs.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_400);
        expect(rawInputs.message).toBe("Testing KitGeneralError");
        expect(rawInputs.details).toBe(undefined);
    });
    it("Should return proper serialized inputs", function () {
        const test = new KitGeneralError(
            STATUS_CODES.CODES.HTTP_CODE_400,
            "Testing KitGeneralError"
        );
        const json = JSON.parse(JSON.stringify(test));
        expect(test instanceof KitGeneralError);
        expect(typeof json).toBe("object");
        expect(json.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_400);
        expect(json.message).toBe("Testing KitGeneralError");
        expect(json.details).toBe(undefined);
    });
});

describe("*** Testing BadRequestError ***", function () {
    it("Should be an instance of BadRequestError", function () {
        const test = new BadRequestError("test");
        expect(test instanceof BadRequestError);
    });

    it("Should have message and statusCode as per 400 HTTP status code", function () {
        const test = new BadRequestError();
        expect(test instanceof BadRequestError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_400)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_400);
    });
});

describe("*** Testing UnauthorizedError ***", function () {
    it("Should be an instance of UnauthorizedError", function () {
        const test = new UnauthorizedError("test");
        expect(test instanceof UnauthorizedError);
    });

    it("Should have message and statusCode as per 401 HTTP status code", function () {
        const test = new UnauthorizedError();
        expect(test instanceof UnauthorizedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_401)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_401);
    });
});

describe("*** Testing PaymentRequiredError ***", function () {
    it("Should be an instance of PaymentRequiredError", function () {
        const test = new PaymentRequiredError("test");
        expect(test instanceof PaymentRequiredError);
    });

    it("Should have message and statusCode as per 402 HTTP status code", function () {
        const test = new PaymentRequiredError();
        expect(test instanceof PaymentRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_402)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_402);
    });
});

describe("*** Testing ForbiddenError ***", function () {
    it("Should be an instance of ForbiddenError", function () {
        const test = new ForbiddenError("test");
        expect(test instanceof ForbiddenError);
    });

    it("Should have message and statusCode as per 403 HTTP status code", function () {
        const test = new ForbiddenError();
        expect(test instanceof ForbiddenError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_403)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_403);
    });
});

describe("*** Testing NotFoundError ***", function () {
    it("Should be an instance of NotFoundError", function () {
        const test = new NotFoundError("test");
        expect(test instanceof NotFoundError);
    });

    it("Should have message and statusCode as per 404 HTTP status code", function () {
        const test = new NotFoundError();
        expect(test instanceof NotFoundError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_404)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_404);
    });
});

describe("*** Testing MethodNotAllowedError ***", function () {
    it("Should be an instance of MethodNotAllowedError", function () {
        const test = new MethodNotAllowedError("test");
        expect(test instanceof MethodNotAllowedError);
    });

    it("Should have message and statusCode as per 405 HTTP status code", function () {
        const test = new MethodNotAllowedError();
        expect(test instanceof MethodNotAllowedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_405)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_405);
    });
});

describe("*** Testing NotAcceptableError ***", function () {
    it("Should be an instance of NotAcceptableError", function () {
        const test = new NotAcceptableError("test");
        expect(test instanceof NotAcceptableError);
    });

    it("Should have message and statusCode as per 406 HTTP status code", function () {
        const test = new NotAcceptableError();
        expect(test instanceof NotAcceptableError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_406)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_406);
    });
});

describe("*** Testing ProxyAuthenticationRequiredError ***", function () {
    it("Should be an instance of ProxyAuthenticationRequiredError", function () {
        const test = new ProxyAuthenticationRequiredError("test");
        expect(test instanceof ProxyAuthenticationRequiredError);
    });

    it("Should have message and statusCode as per 407 HTTP status code", function () {
        const test = new ProxyAuthenticationRequiredError();
        expect(test instanceof ProxyAuthenticationRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_407)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_407);
    });
});

describe("*** Testing RequestTimeoutError ***", function () {
    it("Should be an instance of RequestTimeoutError", function () {
        const test = new RequestTimeoutError("test");
        expect(test instanceof RequestTimeoutError);
    });

    it("Should have message and statusCode as per 408 HTTP status code", function () {
        const test = new RequestTimeoutError();
        expect(test instanceof RequestTimeoutError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_408)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_408);
    });
});

describe("*** Testing ConflictError ***", function () {
    it("Should be an instance of ConflictError", function () {
        const test = new ConflictError("test");
        expect(test instanceof ConflictError);
    });

    it("Should have message and statusCode as per 409 HTTP status code", function () {
        const test = new ConflictError();
        expect(test instanceof ConflictError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_409)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_409);
    });
});

describe("*** Testing GoneError ***", function () {
    it("Should be an instance of GoneError", function () {
        const test = new GoneError("test");
        expect(test instanceof GoneError);
    });

    it("Should have message and statusCode as per 410 HTTP status code", function () {
        const test = new GoneError();
        expect(test instanceof GoneError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_410)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_410);
    });
});

describe("*** Testing LengthRequiredError ***", function () {
    it("Should be an instance of LengthRequiredError", function () {
        const test = new LengthRequiredError("test");
        expect(test instanceof LengthRequiredError);
    });

    it("Should have message and statusCode as per 411 HTTP status code", function () {
        const test = new LengthRequiredError();
        expect(test instanceof LengthRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_411)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_411);
    });
});

describe("*** Testing PreconditionFailedError ***", function () {
    it("Should be an instance of PreconditionFailedError", function () {
        const test = new PreconditionFailedError("test");
        expect(test instanceof PreconditionFailedError);
    });

    it("Should have message and statusCode as per 412 HTTP status code", function () {
        const test = new PreconditionFailedError();
        expect(test instanceof PreconditionFailedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_412)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_412);
    });
});

describe("*** Testing RequestTooLongError ***", function () {
    it("Should be an instance of RequestTooLongError", function () {
        const test = new RequestTooLongError("test");
        expect(test instanceof RequestTooLongError);
    });

    it("Should have message and statusCode as per 413 HTTP status code", function () {
        const test = new RequestTooLongError();
        expect(test instanceof RequestTooLongError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_413)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_413);
    });
});

describe("*** Testing RequestUriTooLongError ***", function () {
    it("Should be an instance of RequestUriTooLongError", function () {
        const test = new RequestUriTooLongError("test");
        expect(test instanceof RequestUriTooLongError);
    });

    it("Should have message and statusCode as per 414 HTTP status code", function () {
        const test = new RequestUriTooLongError();
        expect(test instanceof RequestUriTooLongError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_414)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_414);
    });
});

describe("*** Testing UnsupportedMediaTypeError ***", function () {
    it("Should be an instance of UnsupportedMediaTypeError", function () {
        const test = new UnsupportedMediaTypeError("test");
        expect(test instanceof UnsupportedMediaTypeError);
    });

    it("Should have message and statusCode as per 415 HTTP status code", function () {
        const test = new UnsupportedMediaTypeError();
        expect(test instanceof UnsupportedMediaTypeError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_415)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_415);
    });
});

describe("*** Testing RequestedRangeNotSatisfiableError ***", function () {
    it("Should be an instance of RequestedRangeNotSatisfiableError", function () {
        const test = new RequestedRangeNotSatisfiableError("test");
        expect(test instanceof RequestedRangeNotSatisfiableError);
    });

    it("Should have message and statusCode as per 416 HTTP status code", function () {
        const test = new RequestedRangeNotSatisfiableError();
        expect(test instanceof RequestedRangeNotSatisfiableError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_416)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_416);
    });
});

describe("*** Testing ExpectationFailedError ***", function () {
    it("Should be an instance of ExpectationFailedError", function () {
        const test = new ExpectationFailedError("test");
        expect(test instanceof ExpectationFailedError);
    });

    it("Should have message and statusCode as per 417 HTTP status code", function () {
        const test = new ExpectationFailedError();
        expect(test instanceof ExpectationFailedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_417)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_417);
    });
});

describe("*** Testing ImATeapotError ***", function () {
    it("Should be an instance of ImATeapotError", function () {
        const test = new ImATeapotError("test");
        expect(test instanceof ImATeapotError);
    });

    it("Should have message and statusCode as per 418 HTTP status code", function () {
        const test = new ImATeapotError();
        expect(test instanceof ImATeapotError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_418)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_418);
    });
});

describe("*** Testing InsufficientSpaceOnResourceError ***", function () {
    it("Should be an instance of InsufficientSpaceOnResourceError", function () {
        const test = new InsufficientSpaceOnResourceError("test");
        expect(test instanceof InsufficientSpaceOnResourceError);
    });

    it("Should have message and statusCode as per 419 HTTP status code", function () {
        const test = new InsufficientSpaceOnResourceError();
        expect(test instanceof InsufficientSpaceOnResourceError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_419)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_419);
    });
});

describe("*** Testing MethodFailureError ***", function () {
    it("Should be an instance of MethodFailureError", function () {
        const test = new MethodFailureError("test");
        expect(test instanceof MethodFailureError);
    });

    it("Should have message and statusCode as per 420 HTTP status code", function () {
        const test = new MethodFailureError();
        expect(test instanceof MethodFailureError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_420)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_420);
    });
});

describe("*** Testing MisdirectedRequestError ***", function () {
    it("Should be an instance of MisdirectedRequestError", function () {
        const test = new MisdirectedRequestError("test");
        expect(test instanceof MisdirectedRequestError);
    });

    it("Should have message and statusCode as per 421 HTTP status code", function () {
        const test = new MisdirectedRequestError();
        expect(test instanceof MisdirectedRequestError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_421)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_421);
    });
});

describe("*** Testing UnprocessableEntityError ***", function () {
    it("Should be an instance of UnprocessableEntityError", function () {
        const test = new UnprocessableEntityError("test");
        expect(test instanceof UnprocessableEntityError);
    });

    it("Should have message and statusCode as per 422 HTTP status code", function () {
        const test = new UnprocessableEntityError();
        expect(test instanceof UnprocessableEntityError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_422)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_422);
    });
});

describe("*** Testing LockedError ***", function () {
    it("Should be an instance of LockedError", function () {
        const test = new LockedError("test");
        expect(test instanceof LockedError);
    });

    it("Should have message and statusCode as per 423 HTTP status code", function () {
        const test = new LockedError();
        expect(test instanceof LockedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_423)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_423);
    });
});

describe("*** Testing FailedDependencyError ***", function () {
    it("Should be an instance of FailedDependencyError", function () {
        const test = new FailedDependencyError("test");
        expect(test instanceof FailedDependencyError);
    });

    it("Should have message and statusCode as per 424 HTTP status code", function () {
        const test = new FailedDependencyError();
        expect(test instanceof FailedDependencyError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_424)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_424);
    });
});

describe("*** Testing TooEarlyError ***", function () {
    it("Should be an instance of TooEarlyError", function () {
        const test = new TooEarlyError("test");
        expect(test instanceof TooEarlyError);
    });

    it("Should have message and statusCode as per 425 HTTP status code", function () {
        const test = new TooEarlyError();
        expect(test instanceof TooEarlyError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_425)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_425);
    });
});

describe("*** Testing UpgradeRequiredError ***", function () {
    it("Should be an instance of UpgradeRequiredError", function () {
        const test = new UpgradeRequiredError("test");
        expect(test instanceof UpgradeRequiredError);
    });

    it("Should have message and statusCode as per 426 HTTP status code", function () {
        const test = new UpgradeRequiredError();
        expect(test instanceof UpgradeRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_426)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_426);
    });
});

describe("*** Testing PreconditionRequiredError ***", function () {
    it("Should be an instance of PreconditionRequiredError", function () {
        const test = new PreconditionRequiredError("test");
        expect(test instanceof PreconditionRequiredError);
    });

    it("Should have message and statusCode as per 428 HTTP status code", function () {
        const test = new PreconditionRequiredError();
        expect(test instanceof PreconditionRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_428)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_428);
    });
});

describe("*** Testing TooManyRequestsError ***", function () {
    it("Should be an instance of TooManyRequestsError", function () {
        const test = new TooManyRequestsError("test");
        expect(test instanceof TooManyRequestsError);
    });

    it("Should have message and statusCode as per 429 HTTP status code", function () {
        const test = new TooManyRequestsError();
        expect(test instanceof TooManyRequestsError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_429)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_429);
    });
});

describe("*** Testing RequestHeaderFieldsTooLargeError ***", function () {
    it("Should be an instance of RequestHeaderFieldsTooLargeError", function () {
        const test = new RequestHeaderFieldsTooLargeError("test");
        expect(test instanceof RequestHeaderFieldsTooLargeError);
    });

    it("Should have message and statusCode as per 431 HTTP status code", function () {
        const test = new RequestHeaderFieldsTooLargeError();
        expect(test instanceof RequestHeaderFieldsTooLargeError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_431)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_431);
    });
});

describe("*** Testing UnavailableForLegalReasonsError ***", function () {
    it("Should be an instance of UnavailableForLegalReasonsError", function () {
        const test = new UnavailableForLegalReasonsError("test");
        expect(test instanceof UnavailableForLegalReasonsError);
    });

    it("Should have message and statusCode as per 451 HTTP status code", function () {
        const test = new UnavailableForLegalReasonsError();
        expect(test instanceof UnavailableForLegalReasonsError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_451)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_451);
    });
});

describe("*** Testing InternalServerError ***", function () {
    it("Should be an instance of InternalServerError", function () {
        const test = new InternalServerError("test");
        expect(test instanceof InternalServerError);
    });

    it("Should have message and statusCode as per 500 HTTP status code", function () {
        const test = new InternalServerError();
        expect(test instanceof InternalServerError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_500)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_500);
    });
});

describe("*** Testing NotImplementedError ***", function () {
    it("Should be an instance of NotImplementedError", function () {
        const test = new NotImplementedError("test");
        expect(test instanceof NotImplementedError);
    });

    it("Should have message and statusCode as per 501 HTTP status code", function () {
        const test = new NotImplementedError();
        expect(test instanceof NotImplementedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_501)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_501);
    });
});

describe("*** Testing BadGatewayError ***", function () {
    it("Should be an instance of BadGatewayError", function () {
        const test = new BadGatewayError("test");
        expect(test instanceof BadGatewayError);
    });

    it("Should have message and statusCode as per 502 HTTP status code", function () {
        const test = new BadGatewayError();
        expect(test instanceof BadGatewayError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_502)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_502);
    });
});

describe("*** Testing ServiceUnavailableError ***", function () {
    it("Should be an instance of ServiceUnavailableError", function () {
        const test = new ServiceUnavailableError("test");
        expect(test instanceof ServiceUnavailableError);
    });

    it("Should have message and statusCode as per 503 HTTP status code", function () {
        const test = new ServiceUnavailableError();
        expect(test instanceof ServiceUnavailableError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_503)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_503);
    });
});

describe("*** Testing GatewayTimeoutError ***", function () {
    it("Should be an instance of GatewayTimeoutError", function () {
        const test = new GatewayTimeoutError("test");
        expect(test instanceof GatewayTimeoutError);
    });

    it("Should have message and statusCode as per 504 HTTP status code", function () {
        const test = new GatewayTimeoutError();
        expect(test instanceof GatewayTimeoutError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_504)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_504);
    });
});

describe("*** Testing HttpVersionNotSupportedError ***", function () {
    it("Should be an instance of HttpVersionNotSupportedError", function () {
        const test = new HttpVersionNotSupportedError("test");
        expect(test instanceof HttpVersionNotSupportedError);
    });

    it("Should have message and statusCode as per 505 HTTP status code", function () {
        const test = new HttpVersionNotSupportedError();
        expect(test instanceof HttpVersionNotSupportedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_505)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_505);
    });
});

describe("*** Testing VariantAlsoNegotiatesError ***", function () {
    it("Should be an instance of VariantAlsoNegotiatesError", function () {
        const test = new VariantAlsoNegotiatesError("test");
        expect(test instanceof VariantAlsoNegotiatesError);
    });

    it("Should have message and statusCode as per 506 HTTP status code", function () {
        const test = new VariantAlsoNegotiatesError();
        expect(test instanceof VariantAlsoNegotiatesError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_506)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_506);
    });
});

describe("*** Testing InsufficientStorageError ***", function () {
    it("Should be an instance of InsufficientStorageError", function () {
        const test = new InsufficientStorageError("test");
        expect(test instanceof InsufficientStorageError);
    });

    it("Should have message and statusCode as per 507 HTTP status code", function () {
        const test = new InsufficientStorageError();
        expect(test instanceof InsufficientStorageError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_507)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_507);
    });
});

describe("*** Testing LoopDetectedError ***", function () {
    it("Should be an instance of LoopDetectedError", function () {
        const test = new LoopDetectedError("test");
        expect(test instanceof LoopDetectedError);
    });

    it("Should have message and statusCode as per 508 HTTP status code", function () {
        const test = new LoopDetectedError();
        expect(test instanceof LoopDetectedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_508)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_508);
    });
});

describe("*** Testing NotExtendedError ***", function () {
    it("Should be an instance of NotExtendedError", function () {
        const test = new NotExtendedError("test");
        expect(test instanceof NotExtendedError);
    });

    it("Should have message and statusCode as per 510 HTTP status code", function () {
        const test = new NotExtendedError();
        expect(test instanceof NotExtendedError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_510)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_510);
    });
});

describe("*** Testing NetworkAuthenticationRequiredError ***", function () {
    it("Should be an instance of NetworkAuthenticationRequiredError", function () {
        const test = new NetworkAuthenticationRequiredError("test");
        expect(test instanceof NetworkAuthenticationRequiredError);
    });

    it("Should have message and statusCode as per 511 HTTP status code", function () {
        const test = new NetworkAuthenticationRequiredError();
        expect(test instanceof NetworkAuthenticationRequiredError);
        expect(test.message).toBe(
            STATUS_CODES.getStatusDescription(STATUS_CODES.CODES.HTTP_CODE_511)
        );
        expect(test.statusCode).toBe(STATUS_CODES.CODES.HTTP_CODE_511);
    });
});
