import logo from "./logo.svg";
import "./App.css";
import userInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  const userInfo = {
    username: "Admin",
    isAdmin: true,
  };

  return (
    <ThemeProvider>
      <userInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
      </userInfoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
