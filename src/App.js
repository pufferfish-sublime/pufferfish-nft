import { 
  Routes, 
  Route,
} from "react-router-dom";


import Home from "./Components/Home/Home";




const App = () => {
  return (
    <Routes>
      <Route path="/Home" element={  <Home />  }/>
    </Routes>
  );
}

export default App;
