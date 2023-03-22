const { expect } = require("chai");
const sinon = require("sinon");
const request = require("supertest");

const app = require("../../../index");
const Posts = require("../../../entities/posts");
const Post = require("../../../entities/post");
const faker = require("faker");
const { randomUUID } = require("crypto");

describe("------------------routes/api.js--------------------", () => {

  describe("#GET /all", () => {
    it("should return all posts", async () => {
      const stubValue = [
        {
          id: randomUUID(),
          title: faker.lorem.sentence(),
          description: faker.hacker.phrase(),
        },
        {
          id: randomUUID(),
          title: faker.lorem.sentence(),
          description: faker.hacker.phrase(),
        },
      ];
      const stub = sinon.stub(Posts, "getAll").returns(stubValue);
      const res = await request(app).get("/api/all");
      expect(res.status).to.eql(200);
      expect(res.body).to.eql(stubValue);
      stub.restore();
    });
  });

  describe("#POST /api/new", () => {
    it("should add a new post", async function () {
      const res = await request(app).post("/api/new");
      expect(res.status).to.eql(201);
      expect(res.text).to.eql("Post Added succesfully!");
    });
  });

  describe("#DELETE /api/delete/:id", function () {
    it("should delete a post", async function () {
      const post = new Post({
        id: randomUUID(),
        title: faker.lorem.sentence(),
        description: faker.hacker.phrase(),
      });
      Posts.addPost(post);
      const res = await request(app).delete("/api/delete/" + post.id);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql(post.id);
    });
  });

  describe("#PUT /api/update/:id/:title-:description", function () {
    it("should update a post", async function () {
      const post = new Post({
        id: randomUUID(),
        title: faker.lorem.sentence(),
        description: faker.hacker.phrase(),
      });
      Posts.addPost(post);
      const res = await request(app).put(
        "/api/update/" +
          post.id +
          "/" +
          faker.lorem.sentence() +
          "-" +
          faker.hacker.phrase()
      );
      expect(res.status).to.eql(200);
      expect(res.text).to.eql("Post updated successfully!");
    });
  });
});
