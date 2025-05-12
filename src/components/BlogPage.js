import React, { useContext } from "react";
import BlogPost from "./BlogPost";
import userInfoContext from "../context/UserInfoContext";
import ThemeContext from "../context/ThemeContext";

export default function BlogPage() {
  const userInfo = useContext(userInfoContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p> Current theme {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Blog Page</h1>
      <BlogPost
        username={userInfo.username}
        isAdmin={userInfo.isAdmin}
      ></BlogPost>
    </div>
  );
}
