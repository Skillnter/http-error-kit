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
    KitHttpError,
    KitHttpErrorConfig,
} from "../src";

describe("*** Testing imports ***", function () {
    const errorList = [
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
    ];
    it("should import errors of KitGeneralError type", () => {
        for (let error of errorList) {
            const errorInstance = new error("test");
            expect(errorInstance).toBeInstanceOf(error);
            expect(errorInstance).toBeInstanceOf(KitGeneralError);
        }
    });
    it("should import errors of KitGeneralError type", () => {
        KitHttpErrorConfig.configureFormatter(
            (statusCode, message, details, ...args) => ({
                list: args,
            })
        );
        for (let error of errorList) {
            const errorInstance = new error();
            expect(errorInstance).toBeInstanceOf(error);
            expect(errorInstance).toBeInstanceOf(KitHttpError);
        }
    });
});
