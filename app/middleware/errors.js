import { errPayload } from "../controller/posts.js";

export const errorHandler = (err, req, res, next) => {
  res.status(err.status).json(errPayload(err.code, err.message));
};
