import { NotFoundError, RequestValidationError } from "../../core/errors.js";

let posts = [
  { id: 1, title: "My first post" },
  { id: 2, title: "My second post" },
  { id: 3, title: "My third post" },
  { id: 4, title: "My fourth post" },
  { id: 5, title: "My fifth post" },
  { id: 6, title: "My sixth post" },
  { id: 7, title: "My seventh post" },
  { id: 8, title: "My eighth post" },
  { id: 9, title: "My nineth post" },
  { id: 10, title: "My tenth post" },
  { id: 11, title: "My eleventh post" },
  { id: 12, title: "My twelfth post" },
  { id: 13, title: "My thirtheenth post" },
  { id: 14, title: "My fourteenth post" },
];

export const errPayload = (code, msg) => {
  return {
    status: "error",
    code: code,
    message: msg,
  };
};

export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);

  if (!posts) {
    throw new NotFoundError(undefined, "Posts not found");
  }

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    throw new NotFoundError(undefined, `Post not found with id ${id}`);
  }

  res.status(200).json(post);
};

export const createPost = (req, res, next) => {
  const title = req.body?.title ?? null;

  if (!title) {
    throw new RequestValidationError(
      undefined,
      "Missing title for post create",
    );
  }

  posts.push({ id: posts.length + 1, title: title });
  res.status(201).json(posts);
};

export const updatePost = (req, res, next) => {
  const title = req.body?.title ?? null;

  if (!title) {
    throw new RequestValidationError(
      undefined,
      "Missing title for post update",
    );
  }

  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    throw new NotFoundError(undefined, `Post not found with id ${id}`);
  }

  post.title = req.body.title;

  res.status(200).json(posts);
};

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    throw new NotFoundError(undefined, `Post not found with id ${id}`);
  }

  posts = posts.filter((p) => p.id !== id);
  res.status(204).json();
};
