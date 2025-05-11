import logo from "./logo.svg";
import "./App.css";
import userInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true,
  };

  return (
    <userInfoContext.Provider value={userInfo}>
      <BlogPage></BlogPage>
    </userInfoContext.Provider>
  );
}

export default App;
