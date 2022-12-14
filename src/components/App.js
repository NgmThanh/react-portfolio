import Menu from './Menu/Menu';
import '../styles/App.scss';
import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';

export default function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // loader handler
    const loader = document.querySelector(".loader");

    loader.addEventListener('animationend', () => {
      setLoader(false);
    });
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <main id="main-container" className="App" data-scroll-container>
      <Menu />
    </main >
  );
}