import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Ide from "./components/Ide/Ide";
import Reviews from "./components/Reviwes/Reviews";




function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/ide" element={<Ide></Ide>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
      </Routes>


    </div>
  );
}

export default App;
