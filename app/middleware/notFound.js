import { NotFoundError } from "../../core/errors.js";

export const notFoundHandler = (req, res, next) => {
  // const error = new NotFoundError(undefined, undefined, "Not Found");
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
};
