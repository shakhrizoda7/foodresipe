import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./components/Template/Template";
import Landing from "./components/Template/Landing/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template/>}>
            <Route index element={<Landing/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;