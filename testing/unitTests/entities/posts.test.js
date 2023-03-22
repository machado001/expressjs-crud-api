"use strict";
const { expect } = require("chai");
const sinon = require("sinon");
const Posts = require("../../../entities/posts");
const { describe, it } = require("mocha");
const {} = require("sinon");

describe("-------------------class Posts---------------------", () => {
  describe("#getAll()", () => {
    it("should return all posts", () => {
      const initialPosts = Posts.getAll();
      const postsMock = [
        {
          id: "b201076f-4dca-4478-b757-223166b1bd56",
          title: "title mock",
          description: "description mock",
        },
      ];
      expect(initialPosts).to.be.deep.equal(postsMock);
    });

    describe("#addPost()", () => {
      beforeEach(() => {
        Posts.posts = [
          {
            id: "b201076f-4dca-4478-b757-223166b1bd56",
            title: "title mock",
            description: "description mock",
          },
        ];
      });

      it("should add a post to the posts array", () => {
        Posts.addPost({
          id: "123",
          title: "New post",
          description: "New post description",
        });
        expect(Posts.posts).to.have.lengthOf(2);
        expect(Posts.posts[1]).to.deep.equal({
          id: "123",
          title: "New post",
          description: "New post description",
        });
      });

      it("should return the length of the posts array", () => {
        const length = Posts.addPost({
          id: "123",
          title: "New post",
          description: "New post description",
        });
        expect(length).to.equal(2);
      });

      it("should throw an error if called with incorrect arguments", () => {
        const spy = sinon.spy(Posts, "addPost");
        expect(() => spy({})).to.throws();
      });
    });
  });
});
