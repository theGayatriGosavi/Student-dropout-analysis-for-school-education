import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "../../Pages/Overview";
import Feedback from "../../Pages/Feedback";
import Dropout from "../../Pages/Dropout";
import Policy from "../../Pages/Policy";
import Institute from "../../Pages/Institute";
import Admin from "../../Pages/Admin";
import SignIn from "../LogIn";
function AppRoutes(){
    return(
        <div className="AppRoutes">
            <Routes>
              <Route path="/" element={<Overview />}></Route>
              <Route path="/dropout" element={<Dropout />}></Route>
              <Route path="/policy" element={<Policy />}></Route>
              <Route path="/institute" element={<Institute />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="/login" element={<SignIn />}></Route>
            </Routes>
        </div>
    )
}

export default AppRoutes;