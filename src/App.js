import React from "react";
import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import Brands from "./pages/Brands";
import View from "./pages/View";
import About from "./pages/About";
import Support from "./pages/Support";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Locations from "./pages/Locations";
import More from "./pages/More";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Forgotpassword from "./pages/Forgotpassword";
import Tearms from "./pages/Terms";
import Agra from "./pages/Agra";
import Jaipur from "./pages/Jaipur";
import Lucknow from "./pages/Lucknow";
import Delhi from "./pages/Delhi";
import Contact from "./pages/Contact";
import Wedding from "./pages/Wedding";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    
    <Router>
      <Header>  
      </Header>
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/Categories" element={<Categories />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Agra" element={<Agra />}/>
        <Route path="/Delhi" element={<Delhi />}/>
        <Route path="/Jaipur" element={<Jaipur />}/>
        <Route path="/Lucknow" element={<Lucknow />}/>
        <Route path="/Forgotpassword" element={<Forgotpassword />}/>
        <Route path="/Brands" element={<Brands />}/>
        <Route path="/View" element={<View />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Locations" element={<Locations />}/>
        <Route path="/Support" element={<Support />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Terms" element={<Tearms />}/>
        <Route path="/Wedding" element={<Wedding />}/>
        
      </Routes>

      <Footer/>
      
    </Router>
     <ToastContainer
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="dark"
     />
     </>
  );
}

export default App;
