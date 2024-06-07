
import { Routes,Route,BrowserRouter } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
