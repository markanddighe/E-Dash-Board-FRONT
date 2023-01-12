import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/Sign-Up';
import PrivateComponent from './Components/Private-Component';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';


function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
      <Nav />
          
          <Routes>

          <Route element={<PrivateComponent />} >    {/* register ke bina dusre page pr nahi jaa skte private component bnay hai */} 

            <Route path="/" element={<ProductList />}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update/:id" element={<UpdateProduct />}></Route>
            <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
            <Route path="/profile" element={<h1>Profile Component</h1>}></Route>

          </Route> 
           
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>



          </Routes>
  
  </BrowserRouter>

    <Footer />
    </div>
  );
}

export default App;
