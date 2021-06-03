import React from "react";
import '../../css/style.css';
import { GiBlackHoleBolas } from 'react-icons/gi';

function Preloader () {
  window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
  })
  return(
    <div className="preload">
      <div className="preload__logo"><GiBlackHoleBolas /></div>
      <h1 className="preload__info">Loading<span> . . .</span></h1>
    </div>
  )
}

export default Preloader;