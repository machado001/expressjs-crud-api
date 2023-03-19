"use strict";
const { expect, assert } = require("chai");
const Post = require("../../../entities/post");
const { describe, it } = require("mocha");

describe("class Post", () => {
  describe("#constructor", () => {
    it("should create a new Post object", () => {
      const post = new Post({
        id: "1234-db42-4832",
        title: "Title",
        description: "Description",
      });
      expect(post).to.be.an.instanceOf(Post);
      expect(post.id).to.equal("1234-db42-4832");
      expect(post.title).to.equal("Title");
      expect(post.description).to.equal("Description");
    });
    it("should be RFC 4122 Version 4 UUID (string) ", () => {
      const post = new Post({ id: crypto.randomUUID() });
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

      expect(post.id).to.match(uuidRegex);
    });

    it("shouldn't return typeof object to id, title and description properties ", () => {
      const post = new Post({
        id: crypto.randomUUID(),
        title: "title should be a string",
        description: "description should be a string",
      });
      const logicalOR = post.id || post.title || post.description;
      assert.typeOf(logicalOR, "string");
      assert.notTypeOf(logicalOR, "object");
    });

  });
});
