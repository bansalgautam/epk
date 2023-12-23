import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [pass, setPass] = useState("");
  return (
    <UserContext.Provider value={{ pass, setPass }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
