import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  let fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts(data);
  };

  return (
    <div className="container">
      <h2 className="text-danger mb-4 text-center">Post List Component</h2>
      <button className="btn btn-primary mb-3" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <ul className="list-group ">
        {posts.map((post) => (
          <li className="list-group-item p-3 border-2 mb-2 bg-light rounded-3" key={post.id}>
            <h4 className="text-success">{post.title}</h4>
            <p className="text-muted">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;