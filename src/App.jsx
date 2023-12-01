import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import { SignUp } from "./Pages/SignUp";
import Protected from "./Context/Protected";
export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/Account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
