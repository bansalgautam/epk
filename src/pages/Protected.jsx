import { useContext, useEffect } from "react";
import userContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const { pass } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (pass !== "2024") {
      navigate("/pass");
    }
  }, []);
  return <div>{children}</div>;
}
export default Protected;
