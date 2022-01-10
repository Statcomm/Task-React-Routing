import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css"
import Detail from './components/Detail'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import products from "./products.js"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function App() {

  return (
   <div>
<Navbar />
   <div >
     
     
<Routes>

<Route path="/" element = {<Home />} />
<Route path="/ProductList" element = {<ProductList />} />
<Route path="/ProductList/:x" element = {<Detail/>} />

</Routes>
    </div>
    </div>
  );
}

export default App;
