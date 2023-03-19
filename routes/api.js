const express = require("express");
const router = express.Router();
const Posts = require("../entities/posts");
const Post = require("../entities/post");
const faker = require("faker");
const { randomUUID } = require("crypto");

router.get("/all", (req, res) => {
  return res.status(200).json(Posts.getAll());
});

router.post("/new", (req, res) => {
  const newPost = new Post({
    id: randomUUID(),
    title: faker.lorem.sentence(),
    description: faker.hacker.phrase(),
  });
  Posts.addPost(newPost);
  return res.status(201).send("Post Added succesfully!");
});

router.delete("/delete/:id", (req, res) => {
  Posts.deletePost(req.params.id);
  res.status(200).send(req.params.id);
});

router.put("/update/:id/:title-:description", (req, res) => {
  const { id, title, description } = req.params;
  Posts.updatePost(id, title, description);
  res.status(200).send("Post updated successfully!");
});

module.exports = router;
