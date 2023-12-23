import { useContext, useEffect, useState } from "react";
import userContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Pass() {
  const [value, setValue] = useState("");
  const { pass, setPass } = useContext(userContext);
  const navigate = useNavigate();

  const changeHandle = (e) => {
    const value1 = e.target.value;
    setValue(value1);
  };

  const handleSubmit = () => {
    setPass(value);
  };

  useEffect(() => {
    if (pass === "2024") {
      navigate("/");
    }
  }, [pass]);

  return (
    <div className="min-h-[100vh] min-w-[100vw] flex items-center justify-center bg-[#c2c2c2] px-6">
      <div className="border-[3px] border-black rounded-md p-4 max-w-[350px] w-full bg-[#fee4e4]">
        <div className="text-center text-3xl font-semibold mb-3">
          Enter Password :{" "}
        </div>
        <div className="text-red-600">
          {pass.length > 0 ? "Enter Valid Password" : ""}
        </div>
        <input
          className="w-full text-2xl focus:outline-0 border-2 border-black rounded-md pl-4 py-1 mb-2"
          type="password"
          placeholder="Pass..."
          value={value}
          onChange={changeHandle}
        />
        <button
          className="text-3xl w-full bg-[#50f533] border-2 border-black rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Pass;
