import Prenav from "./Components/Prenav";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact"
import Section1 from "./Components/Section1";
import Journey from "./Components/Journey";
import Footer from "./Components/Footer";


function App() {
  return (
    //react fragment
     <>  
    <Prenav/>
     <Nav/>
     <Routes>
       <Route path="/section1" element={<Section1/>}></Route>
       <Route path="/journey" element={<Journey/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/services" element={<Services/>}></Route>
      </Routes>
      <Footer/>
   
    </>
  );
}

export default App;
