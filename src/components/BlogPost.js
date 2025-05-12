import React from "react";
import Comment from "./Comment";
// import { useContext } from "react";
// import userInfoContext from "../context/UserInfoContext";

export default function BlogPost({ username, isAdmin }) {
  //   const { username, isAdmin } = useContext(userInfoContext);

  return (
    <div>
      {isAdmin && <button> Delete</button>}

      <h1>Post Title</h1>
      <p>This is a blog post.</p>

      <Comment username={username} isAdmin={isAdmin}></Comment>
    </div>
  );
}
