class AppError extends Error {
  constructor(code = null, status = null, message) {
    super(message);

    this.code = code;
    this.status = status;
    this.message = message;
    this.name = this.constructor.name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class ServerError extends AppError {
  constructor(code, message) {
    super(code || "INTERNAL_ERROR", 500, message);
  }
}

class NotFoundError extends AppError {
  constructor(code, message) {
    super(code || "NOT_FOUND", 404, message);
  }
}

class RequestValidationError extends AppError {
  constructor(code, message) {
    super(code || "INVALID_ERROR", 400, message);
  }
}

export { ServerError, NotFoundError, RequestValidationError };
