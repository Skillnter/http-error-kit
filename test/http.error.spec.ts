import { KitHttpError, KitHttpErrorConfig } from "../src";
import {
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
} from "../src/http.error";
import {
    CODES as STATUS_CODES,
    getStatusDescription,
} from "http-response-status-code";

describe("*** Testing BadRequestError ***", function () {
    it("Should return instance of BadRequestError which extends to KitHttpError", function () {
        const error = new BadRequestError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof BadRequestError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_400)
        );
    });
    it("Should return formatted instance of BadRequestError which extends to KitHttpError", function () {
        const error = new BadRequestError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof BadRequestError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_400)
        );
        expect(error.details).toEqual(undefined);
    });
});

describe("*** Testing UnauthorizedError ***", function () {
    it("Should return instance of UnauthorizedError which extends to KitHttpError", function () {
        const error = new UnauthorizedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnauthorizedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_401);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_401)
        );
    });
    it("Should return formatted instance of UnauthorizedError which extends to KitHttpError", function () {
        const error = new UnauthorizedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnauthorizedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_401);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_401)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing PaymentRequiredError ***", function () {
    it("Should return instance of PaymentRequiredError which extends to KitHttpError", function () {
        const error = new PaymentRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PaymentRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_402);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_402)
        );
    });
    it("Should return formatted instance of PaymentRequiredError which extends to KitHttpError", function () {
        const error = new PaymentRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PaymentRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_402);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_402)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ForbiddenError ***", function () {
    it("Should return instance of ForbiddenError which extends to KitHttpError", function () {
        const error = new ForbiddenError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ForbiddenError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_403);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_403)
        );
    });
    it("Should return formatted instance of ForbiddenError which extends to KitHttpError", function () {
        const error = new ForbiddenError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ForbiddenError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_403);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_403)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing NotFoundError ***", function () {
    it("Should return instance of NotFoundError which extends to KitHttpError", function () {
        const error = new NotFoundError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotFoundError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_404);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_404)
        );
    });
    it("Should return formatted instance of NotFoundError which extends to KitHttpError", function () {
        const error = new NotFoundError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotFoundError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_404);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_404)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing MethodNotAllowedError ***", function () {
    it("Should return instance of MethodNotAllowedError which extends to KitHttpError", function () {
        const error = new MethodNotAllowedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MethodNotAllowedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_405);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_405)
        );
    });
    it("Should return formatted instance of MethodNotAllowedError which extends to KitHttpError", function () {
        const error = new MethodNotAllowedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MethodNotAllowedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_405);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_405)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing NotAcceptableError ***", function () {
    it("Should return instance of NotAcceptableError which extends to KitHttpError", function () {
        const error = new NotAcceptableError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotAcceptableError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_406);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_406)
        );
    });
    it("Should return formatted instance of NotAcceptableError which extends to KitHttpError", function () {
        const error = new NotAcceptableError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotAcceptableError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_406);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_406)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ProxyAuthenticationRequiredError ***", function () {
    it("Should return instance of ProxyAuthenticationRequiredError which extends to KitHttpError", function () {
        const error = new ProxyAuthenticationRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ProxyAuthenticationRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_407);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_407)
        );
    });
    it("Should return formatted instance of ProxyAuthenticationRequiredError which extends to KitHttpError", function () {
        const error = new ProxyAuthenticationRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ProxyAuthenticationRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_407);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_407)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing RequestTimeoutError ***", function () {
    it("Should return instance of RequestTimeoutError which extends to KitHttpError", function () {
        const error = new RequestTimeoutError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestTimeoutError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_408);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_408)
        );
    });
    it("Should return formatted instance of RequestTimeoutError which extends to KitHttpError", function () {
        const error = new RequestTimeoutError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestTimeoutError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_408);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_408)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ConflictError ***", function () {
    it("Should return instance of ConflictError which extends to KitHttpError", function () {
        const error = new ConflictError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ConflictError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_409);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_409)
        );
    });
    it("Should return formatted instance of ConflictError which extends to KitHttpError", function () {
        const error = new ConflictError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ConflictError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_409);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_409)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing GoneError ***", function () {
    it("Should return instance of GoneError which extends to KitHttpError", function () {
        const error = new GoneError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof GoneError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_410);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_410)
        );
    });
    it("Should return formatted instance of GoneError which extends to KitHttpError", function () {
        const error = new GoneError().setFormatter((statusCode, message) => ({
            code: statusCode,
            msg: message,
        }));
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof GoneError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_410);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_410)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing LengthRequiredError ***", function () {
    it("Should return instance of LengthRequiredError which extends to KitHttpError", function () {
        const error = new LengthRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LengthRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_411);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_411)
        );
    });
    it("Should return formatted instance of LengthRequiredError which extends to KitHttpError", function () {
        const error = new LengthRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LengthRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_411);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_411)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing PreconditionFailedError ***", function () {
    it("Should return instance of PreconditionFailedError which extends to KitHttpError", function () {
        const error = new PreconditionFailedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PreconditionFailedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_412);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_412)
        );
    });
    it("Should return formatted instance of PreconditionFailedError which extends to KitHttpError", function () {
        const error = new PreconditionFailedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PreconditionFailedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_412);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_412)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing RequestTooLongError ***", function () {
    it("Should return instance of RequestTooLongError which extends to KitHttpError", function () {
        const error = new RequestTooLongError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestTooLongError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_413);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_413)
        );
    });
    it("Should return formatted instance of RequestTooLongError which extends to KitHttpError", function () {
        const error = new RequestTooLongError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestTooLongError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_413);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_413)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing RequestUriTooLongError ***", function () {
    it("Should return instance of RequestUriTooLongError which extends to KitHttpError", function () {
        const error = new RequestUriTooLongError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestUriTooLongError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_414);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_414)
        );
    });
    it("Should return formatted instance of RequestUriTooLongError which extends to KitHttpError", function () {
        const error = new RequestUriTooLongError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestUriTooLongError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_414);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_414)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing UnsupportedMediaTypeError ***", function () {
    it("Should return instance of UnsupportedMediaTypeError which extends to KitHttpError", function () {
        const error = new UnsupportedMediaTypeError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnsupportedMediaTypeError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_415);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_415)
        );
    });
    it("Should return formatted instance of UnsupportedMediaTypeError which extends to KitHttpError", function () {
        const error = new UnsupportedMediaTypeError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnsupportedMediaTypeError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_415);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_415)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing RequestedRangeNotSatisfiableError ***", function () {
    it("Should return instance of RequestedRangeNotSatisfiableError which extends to KitHttpError", function () {
        const error = new RequestedRangeNotSatisfiableError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestedRangeNotSatisfiableError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_416);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_416)
        );
    });
    it("Should return formatted instance of RequestedRangeNotSatisfiableError which extends to KitHttpError", function () {
        const error = new RequestedRangeNotSatisfiableError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestedRangeNotSatisfiableError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_416);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_416)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ExpectationFailedError ***", function () {
    it("Should return instance of ExpectationFailedError which extends to KitHttpError", function () {
        const error = new ExpectationFailedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ExpectationFailedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_417);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_417)
        );
    });
    it("Should return formatted instance of ExpectationFailedError which extends to KitHttpError", function () {
        const error = new ExpectationFailedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ExpectationFailedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_417);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_417)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ImATeapotError ***", function () {
    it("Should return instance of ImATeapotError which extends to KitHttpError", function () {
        const error = new ImATeapotError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ImATeapotError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_418);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_418)
        );
    });
    it("Should return formatted instance of ImATeapotError which extends to KitHttpError", function () {
        const error = new ImATeapotError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ImATeapotError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_418);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_418)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing InsufficientSpaceOnResourceError ***", function () {
    it("Should return instance of InsufficientSpaceOnResourceError which extends to KitHttpError", function () {
        const error = new InsufficientSpaceOnResourceError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InsufficientSpaceOnResourceError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_419);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_419)
        );
    });
    it("Should return formatted instance of InsufficientSpaceOnResourceError which extends to KitHttpError", function () {
        const error = new InsufficientSpaceOnResourceError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InsufficientSpaceOnResourceError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_419);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_419)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing MethodFailureError ***", function () {
    it("Should return instance of MethodFailureError which extends to KitHttpError", function () {
        const error = new MethodFailureError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MethodFailureError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_420);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_420)
        );
    });
    it("Should return formatted instance of MethodFailureError which extends to KitHttpError", function () {
        const error = new MethodFailureError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MethodFailureError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_420);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_420)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing MisdirectedRequestError ***", function () {
    it("Should return instance of MisdirectedRequestError which extends to KitHttpError", function () {
        const error = new MisdirectedRequestError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MisdirectedRequestError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_421);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_421)
        );
    });
    it("Should return formatted instance of MisdirectedRequestError which extends to KitHttpError", function () {
        const error = new MisdirectedRequestError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof MisdirectedRequestError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_421);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_421)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing UnprocessableEntityError ***", function () {
    it("Should return instance of UnprocessableEntityError which extends to KitHttpError", function () {
        const error = new UnprocessableEntityError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnprocessableEntityError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_422);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_422)
        );
    });
    it("Should return formatted instance of UnprocessableEntityError which extends to KitHttpError", function () {
        const error = new UnprocessableEntityError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnprocessableEntityError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_422);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_422)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing LockedError ***", function () {
    it("Should return instance of LockedError which extends to KitHttpError", function () {
        const error = new LockedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LockedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_423);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_423)
        );
    });
    it("Should return formatted instance of LockedError which extends to KitHttpError", function () {
        const error = new LockedError().setFormatter((statusCode, message) => ({
            code: statusCode,
            msg: message,
        }));
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LockedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_423);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_423)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing FailedDependencyError ***", function () {
    it("Should return instance of FailedDependencyError which extends to KitHttpError", function () {
        const error = new FailedDependencyError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof FailedDependencyError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_424);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_424)
        );
    });
    it("Should return formatted instance of FailedDependencyError which extends to KitHttpError", function () {
        const error = new FailedDependencyError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof FailedDependencyError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_424);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_424)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing TooEarlyError ***", function () {
    it("Should return instance of TooEarlyError which extends to KitHttpError", function () {
        const error = new TooEarlyError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof TooEarlyError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_425);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_425)
        );
    });
    it("Should return formatted instance of TooEarlyError which extends to KitHttpError", function () {
        const error = new TooEarlyError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof TooEarlyError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_425);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_425)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing UpgradeRequiredError ***", function () {
    it("Should return instance of UpgradeRequiredError which extends to KitHttpError", function () {
        const error = new UpgradeRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UpgradeRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_426);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_426)
        );
    });
    it("Should return formatted instance of UpgradeRequiredError which extends to KitHttpError", function () {
        const error = new UpgradeRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UpgradeRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_426);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_426)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing PreconditionRequiredError ***", function () {
    it("Should return instance of PreconditionRequiredError which extends to KitHttpError", function () {
        const error = new PreconditionRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PreconditionRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_428);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_428)
        );
    });
    it("Should return formatted instance of PreconditionRequiredError which extends to KitHttpError", function () {
        const error = new PreconditionRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof PreconditionRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_428);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_428)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing TooManyRequestsError ***", function () {
    it("Should return instance of TooManyRequestsError which extends to KitHttpError", function () {
        const error = new TooManyRequestsError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof TooManyRequestsError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_429);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_429)
        );
    });
    it("Should return formatted instance of TooManyRequestsError which extends to KitHttpError", function () {
        const error = new TooManyRequestsError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof TooManyRequestsError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_429);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_429)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing RequestHeaderFieldsTooLargeError ***", function () {
    it("Should return instance of RequestHeaderFieldsTooLargeError which extends to KitHttpError", function () {
        const error = new RequestHeaderFieldsTooLargeError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestHeaderFieldsTooLargeError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_431);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_431)
        );
    });
    it("Should return formatted instance of RequestHeaderFieldsTooLargeError which extends to KitHttpError", function () {
        const error = new RequestHeaderFieldsTooLargeError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof RequestHeaderFieldsTooLargeError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_431);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_431)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing UnavailableForLegalReasonsError ***", function () {
    it("Should return instance of UnavailableForLegalReasonsError which extends to KitHttpError", function () {
        const error = new UnavailableForLegalReasonsError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnavailableForLegalReasonsError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_451);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_451)
        );
    });
    it("Should return formatted instance of UnavailableForLegalReasonsError which extends to KitHttpError", function () {
        const error = new UnavailableForLegalReasonsError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof UnavailableForLegalReasonsError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_451);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_451)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing InternalServerError ***", function () {
    it("Should return instance of InternalServerError which extends to KitHttpError", function () {
        const error = new InternalServerError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InternalServerError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_500);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_500)
        );
    });
    it("Should return formatted instance of InternalServerError which extends to KitHttpError", function () {
        const error = new InternalServerError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InternalServerError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_500);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_500)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing NotImplementedError ***", function () {
    it("Should return instance of NotImplementedError which extends to KitHttpError", function () {
        const error = new NotImplementedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotImplementedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_501);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_501)
        );
    });
    it("Should return formatted instance of NotImplementedError which extends to KitHttpError", function () {
        const error = new NotImplementedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotImplementedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_501);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_501)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing BadGatewayError ***", function () {
    it("Should return instance of BadGatewayError which extends to KitHttpError", function () {
        const error = new BadGatewayError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof BadGatewayError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_502);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_502)
        );
    });
    it("Should return formatted instance of BadGatewayError which extends to KitHttpError", function () {
        const error = new BadGatewayError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof BadGatewayError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_502);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_502)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing ServiceUnavailableError ***", function () {
    it("Should return instance of ServiceUnavailableError which extends to KitHttpError", function () {
        const error = new ServiceUnavailableError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ServiceUnavailableError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_503);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_503)
        );
    });
    it("Should return formatted instance of ServiceUnavailableError which extends to KitHttpError", function () {
        const error = new ServiceUnavailableError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof ServiceUnavailableError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_503);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_503)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing GatewayTimeoutError ***", function () {
    it("Should return instance of GatewayTimeoutError which extends to KitHttpError", function () {
        const error = new GatewayTimeoutError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof GatewayTimeoutError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_504);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_504)
        );
    });
    it("Should return formatted instance of GatewayTimeoutError which extends to KitHttpError", function () {
        const error = new GatewayTimeoutError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof GatewayTimeoutError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_504);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_504)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing HttpVersionNotSupportedError ***", function () {
    it("Should return instance of HttpVersionNotSupportedError which extends to KitHttpError", function () {
        const error = new HttpVersionNotSupportedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof HttpVersionNotSupportedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_505);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_505)
        );
    });
    it("Should return formatted instance of HttpVersionNotSupportedError which extends to KitHttpError", function () {
        const error = new HttpVersionNotSupportedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof HttpVersionNotSupportedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_505);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_505)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing VariantAlsoNegotiatesError ***", function () {
    it("Should return instance of VariantAlsoNegotiatesError which extends to KitHttpError", function () {
        const error = new VariantAlsoNegotiatesError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof VariantAlsoNegotiatesError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_506);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_506)
        );
    });
    it("Should return formatted instance of VariantAlsoNegotiatesError which extends to KitHttpError", function () {
        const error = new VariantAlsoNegotiatesError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof VariantAlsoNegotiatesError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_506);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_506)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing InsufficientStorageError ***", function () {
    it("Should return instance of InsufficientStorageError which extends to KitHttpError", function () {
        const error = new InsufficientStorageError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InsufficientStorageError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_507);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_507)
        );
    });
    it("Should return formatted instance of InsufficientStorageError which extends to KitHttpError", function () {
        const error = new InsufficientStorageError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof InsufficientStorageError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_507);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_507)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing LoopDetectedError ***", function () {
    it("Should return instance of LoopDetectedError which extends to KitHttpError", function () {
        const error = new LoopDetectedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LoopDetectedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_508);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_508)
        );
    });
    it("Should return formatted instance of LoopDetectedError which extends to KitHttpError", function () {
        const error = new LoopDetectedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof LoopDetectedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_508);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_508)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing NotExtendedError ***", function () {
    it("Should return instance of NotExtendedError which extends to KitHttpError", function () {
        const error = new NotExtendedError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotExtendedError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_510);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_510)
        );
    });
    it("Should return formatted instance of NotExtendedError which extends to KitHttpError", function () {
        const error = new NotExtendedError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NotExtendedError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_510);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_510)
        );
        expect(error.details).toEqual(undefined);
    });
});
describe("*** Testing NetworkAuthenticationRequiredError ***", function () {
    it("Should return instance of NetworkAuthenticationRequiredError which extends to KitHttpError", function () {
        const error = new NetworkAuthenticationRequiredError();
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NetworkAuthenticationRequiredError).toBe(true);
        expect(error.statusCode).toBe(STATUS_CODES.HTTP_CODE_511);
        expect(error.message).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_511)
        );
    });
    it("Should return formatted instance of NetworkAuthenticationRequiredError which extends to KitHttpError", function () {
        const error = new NetworkAuthenticationRequiredError().setFormatter(
            (statusCode, message) => ({
                code: statusCode,
                msg: message,
            })
        );
        expect(error instanceof KitHttpError).toBe(true);
        expect(error instanceof NetworkAuthenticationRequiredError).toBe(true);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_511);
        expect(error.msg).toBe(
            getStatusDescription(STATUS_CODES.HTTP_CODE_511)
        );
        expect(error.details).toEqual(undefined);
    });
});

describe("*** Testing KitHttpError ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        const error = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        );
        expect(error instanceof KitHttpError);
    });
    it("Should be an instance of KitHttpError when formatter is provided with args", function () {
        const error = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            "test",
            "test2"
        ).setFormatter((statusCode, message, details, ...args) => ({
            code: statusCode,
            msg: message,
            details,
        }));
        expect(error instanceof KitHttpError);
        expect(error.code).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(error.msg).toBe("Testing KitHttpError");
        expect(error.details).toEqual({});
    });
    it("Should return raw inputs with additional arguments", function () {
        const test = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            "argument1",
            "argument2"
        );
        const rawInputs = test.getInputs();
        expect(test instanceof KitHttpError);
        expect(typeof rawInputs).toBe("object");
        expect(rawInputs.statusCode).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(rawInputs.message).toBe("Testing KitHttpError");
        expect(rawInputs.details).toStrictEqual({});
        expect(rawInputs.args).toBeInstanceOf(Array);
        expect(rawInputs.args).toEqual(["argument1", "argument2"]);
    });
    it("Should return proper serialized inputs", function () {
        const test = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            "argument1",
            "argument2"
        );
        const json = JSON.parse(JSON.stringify(test));
        console.log(json);
        expect(test instanceof KitHttpError);
        expect(typeof json).toBe("object");
        expect(json.statusCode).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(json.message).toBe("Testing KitHttpError");
        expect(json.details).toStrictEqual({});
    });
});

describe("*** Testing KitHttpErrorConfig ***", function () {
    it("Should return false when global formatter is not set", function () {
        const isFormatterSet = KitHttpErrorConfig.shouldUseKitHttpErrors();
        expect(typeof isFormatterSet).toBe("boolean");
        expect(isFormatterSet).toBe(false);
    });
    it("Should return true when global formatter is not set", function () {
        KitHttpErrorConfig.configureFormatter(
            (statusCode, message, details, ...args) => ({
                list: args,
            })
        );
        const isFormatterSet = KitHttpErrorConfig.shouldUseKitHttpErrors();
        expect(typeof isFormatterSet).toBe("boolean");
        expect(isFormatterSet).toBe(true);
    });
});

describe("*** Testing KitHttpError with global formatter ***", function () {
    it("Should be an instance of KitHttpError when no formatter is provided", function () {
        KitHttpErrorConfig.configureFormatter(
            (statusCode, message, details, ...args) => ({
                list: args,
            })
        );
        const error = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            "kit2"
        );
        expect(error instanceof KitHttpError);
        expect(error.list).toEqual(["kit2"]);
    });
    it("Should return raw inputs", function () {
        KitHttpErrorConfig.configureFormatter(() => {});
        const test = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError"
        );
        const rawInputs = test.getInputs();
        expect(test instanceof KitHttpError);
        expect(typeof rawInputs).toBe("object");
        expect(rawInputs.statusCode).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(rawInputs.message).toBe("Testing KitHttpError");
        expect(rawInputs.details).toBe(undefined);
        expect(rawInputs.args).toStrictEqual([]);
    });
    it("Should return proper serialized inputs", function () {
        KitHttpErrorConfig.configureFormatter(
            (statusCode, message, details, ...args) => {
                return {
                    code: statusCode,
                    msg: message,
                    det: details,
                    arg1: args[0],
                    arg2: args[1],
                };
            }
        );
        const test = new KitHttpError(
            STATUS_CODES.HTTP_CODE_400,
            "Testing KitHttpError",
            {},
            "argument1",
            "argument2"
        );
        const json = JSON.parse(JSON.stringify(test));
        expect(test instanceof KitHttpError);
        expect(typeof json).toBe("object");
        expect(json.code).toBe(STATUS_CODES.HTTP_CODE_400);
        expect(json.msg).toBe("Testing KitHttpError");
        expect(json.det).toStrictEqual({});
        expect(json.arg1).toBe("argument1");
        expect(json.arg2).toBe("argument2");
    });
});
