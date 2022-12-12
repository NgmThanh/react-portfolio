import Menu from './Menu/Menu';
import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

export default function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // page transition handler
    // source : https://codepen.io/kylops/pen/PzZjXz
    // const buttons = document.querySelectorAll(".button");

    // buttons.forEach(button => {
    //   button.onclick = () => {
    //     console.log("transition")
    //     var id = button.getAttribute("id");
    //     var layerClass = "." + id + "-layer";
    //     var layers = document.querySelectorAll(layerClass);

    //     for (const layer of layers) {
    //       layer.classList.toggle("active");
    //     }
    //   }
    // })
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <main id="main-container" className="App" data-scroll-container>
      <Menu />

      {/* <div className="transition-layer">
      <div className="bottom-layer">
        <div className="bottom-layer bottom-layer--2"></div>
        <div className="bottom-layer bottom-layer--3"></div>
      </div>
    </div> */}
    </main >
  );
}