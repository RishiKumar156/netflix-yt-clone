import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { user, LogOut } = UserAuth();
  const navigate = useNavigate();
  const Logout_handler = async () => {
    try {
      await LogOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center w-full justify-between p-4 absolute z-[100]">
      <Link to={"/"}>
        <h1 className="text-[red] text-4xl cursor-pointer font-semibold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="felx items-center">
          <Link to={"/Account"}>
            <button className="text-white p-2 mr-4 font-semibold">
              Account
            </button>
          </Link>
          <button
            onClick={Logout_handler}
            className="text-white px-6 cursor-pointer py-2 rounded-sm bg-[red] font-semibold"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="felx items-center">
          <Link to={"/login"}>
            <button className="text-white p-2 mr-4 font-semibold">
              Sing In
            </button>
          </Link>
          <Link to={"/signUp"}>
            <button className="text-white px-6 cursor-pointer py-2 rounded-sm bg-[red] font-semibold">
              Sing Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
