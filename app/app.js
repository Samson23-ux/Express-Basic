import express from "express";
import posts from "./routes/posts.js";
import { errorHandler } from "./middleware/errors.js";
import { loggerHandler } from "./middleware/logger.js";
import { notFoundHandler } from "./middleware/notFound.js";

const app = express();

//  Body middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.use(loggerHandler);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen("8000", () => console.log("Listening on port 8000..."));
