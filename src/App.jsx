import React from "react";
import { useEffect, useState } from "react";
import Header from './header'
import  './App.css'
import Section from './section'
import Section2 from './section2'
import Service from './service'
import Footer from './footer'


function App() {

  
    const [backTotop, setbackTotop] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setbackTotop(true);
        } else {
          setbackTotop(false);
        }
      });
    }, []);
  
    const scrollUp = () => {
      Window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
    };
 
  return (
<>
<Header />
<Section />
<Section2 />
<Service />
<Footer />
<div className="App">
      {backTotop && <button onClick={scrollUp} >/\</button>}
    </div>
</>
  );
}


export default App;
