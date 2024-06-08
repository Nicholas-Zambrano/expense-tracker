
import { Routes,Route,BrowserRouter } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage";
import "./App.scss"
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/signUp"  element={<SignUpPage/>}  />
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
