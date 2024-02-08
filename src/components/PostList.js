import React from "react";

const PostList = ({ value, removeItem }) => {
  return (
    <div>
      {value.map((post, key) => (
        <div className="post">
          <p key={key}>{post.post}</p>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              removeItem(post.id);
            }}
          >
            sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
