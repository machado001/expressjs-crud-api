class Posts {
  static posts = [
    {
      id: "1234-abcd-AB34",
      title: "title mock",
      description: "description mock",
    },
  ];

  static getAll() {
    return this.posts;
  }

  static addPost({ id, title, description }) {
    return this.posts.push({ id, title, description });
  }

  static deletePost(id) {
    const ArrayWithoutSelectedPost = this.posts.filter(
      (item) => item !== this.getPostById(id)
    );
    this.posts = ArrayWithoutSelectedPost;
    return this.posts;
  }

  static getPostById(id) {
    const element = this.posts.find((post) => post.id === id);
    return element;
  }

  static updatePost(id, newTitle, newDescription) {
    let element = this.getPostById(id);
    element = {
      id,
      title: newTitle || element.title,
      description: newDescription || element.description,
    };
    const filteredPosts = this.posts.map(
      (item) => (item = item.id === element.id ? element : item)
    );
    this.posts = filteredPosts;
    return this.posts;
  }
}

module.exports = Posts;
