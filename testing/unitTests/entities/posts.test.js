"use strict";
const { expect, assert } = require("chai");
const Posts = require("../../../entities/posts");
const { describe, it } = require("mocha");
const {} = require("sinon");

describe("class Posts:", () => {
  describe("#getAll()", () => {
    it("should return all posts", () => {
      const initialPosts = Posts.getAll();
      const postsMock = [
        {
          id: "1234-abcd-AB34",
          title: "title mock",
          description: "description mock",
        },
      ];
      expect(initialPosts).to.be.deep.equal(postsMock);
    });
  });
});
