import React from "react";
import { useEffect, useState } from "react";

const backTotop = () => {
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
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backTotop && <button onClick={scrollUp}>/\</button>}
    </div>
  );
};

export default backTotop;
