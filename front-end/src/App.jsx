import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewProfile />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
