import { createContext } from "react";

const userInfoContext = createContext({
  username: "guest",
  isAdmin: false,
});

export default userInfoContext;
