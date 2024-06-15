
import { Routes,Route,BrowserRouter } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage";
import "./App.scss"
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ActualSignUpPage from "./pages/ActualSignUpPage/ActualSignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SetUpPage from "./pages/SetUpPage/SetUpPage";
import BalancePage from "./pages/BalancePage/BalancePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/signUp"  element={<SignUpPage/>}  />
        <Route path = "/signing" element={<ActualSignUpPage/>}/>
        <Route path ="/login" element={<LoginPage/>} />
        <Route path="/setup" element={<SetUpPage/>}/> 
        <Route path="/balance" element={<BalancePage/>} />
        <Route path="/dashboard" element= {<DashboardPage/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
