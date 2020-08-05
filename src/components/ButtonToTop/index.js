import React from 'react';
import './button-to-top.css';

function ScrollTopPage(){
    window.scrollTo(0,0);
}

window.onscroll = function scroll () {
    if( window.pageYOffset > 50){
        document.getElementById("ButtonToTop").style.display = "block";

    }
    else{
        document.getElementById("ButtonToTop").style.display = "none";
    }
}

function ButtonToTop(){
    return (
        <button id="ButtonToTop" className="ButtonBacktoTop" onClick={ScrollTopPage}>&lt;</button>
    );
}

export default ButtonToTop