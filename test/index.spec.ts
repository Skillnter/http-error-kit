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
    isKitHttpError,
    isKitGeneralError,
    isKitError,
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

    it("should verify isKitError and methods on dynamic error classes", async () => {
        KitHttpErrorConfig.resetFormatter();
        const errGeneral = new BadRequestError("Invalid email");
        expect(isKitError(errGeneral)).toBe(true);
        expect(isKitGeneralError(errGeneral)).toBe(true);
        expect(isKitHttpError(errGeneral)).toBe(false);

        // Header method
        const chained = (errGeneral as any).setHeader("WWW-Authenticate", "Bearer");
        expect(chained).toBe(errGeneral);
        expect((errGeneral as any).headers).toEqual({ "WWW-Authenticate": "Bearer" });

        // toResponse
        const response = (errGeneral as any).toResponse();
        expect(response).toBeInstanceOf(Response);
        expect(response.status).toBe(400);
        const body = await response.json();
        expect(body.statusCode).toBe(400);

        // Under KitHttpErrorConfig
        KitHttpErrorConfig.useProblemDetails();
        const errHttp = new NotFoundError("Missing user");
        expect(isKitError(errHttp)).toBe(true);
        expect(isKitHttpError(errHttp)).toBe(true);

        const rfcRes = (errHttp as any).toResponse();
        expect(rfcRes.status).toBe(404);
        expect(rfcRes.headers.get("content-type")).toBe("application/problem+json");
        KitHttpErrorConfig.resetFormatter();
    });
});
