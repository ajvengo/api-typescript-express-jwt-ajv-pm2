import CustomError from "./customError.js";

export default class ValidationError extends CustomError {
  constructor(message?: string) {
    super({
      name: "ValidationError",
      message,
      statusCode: 422,
      errorMessage: "Validation error",
      errorDescription: message,
      fn: ValidationError,
    });
  }
}
