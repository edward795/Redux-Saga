import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../redux/posts/actions";
import { Button } from "./Button";
import "./posts.css";

export const Posts = () => {
  const postData = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Posts</h3>
      <p>
        Using <b>Redux Saga</b> with some logic to load posts
      </p>

      <div>
        {postData &&
          postData.map((post, index) => (
            <div className="post">
              <h4 key={index}>{post.title}</h4>
              <p key={`${index}-${index}`}>{post.body}</p>
            </div>
          ))}
      </div>

      <Button onClick={() => dispatch(fetchPostsRequest())} loading={loading}>
        Load Post!
      </Button>
    </div>
  );
};
