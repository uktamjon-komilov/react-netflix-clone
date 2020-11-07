import React, {useEffect, useState} from 'react';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }

            return () => {
                window.removeEventListener("scroll");
            }
        });
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/ru/d/d2/Zo%CA%BBr_TV.png"
            alt="Zo'r TV"/>
            <div className="circular-space">
                <img
            className="nav__avatar"
            src="https://i.ibb.co/x8YG062/IMG-2265.jpg"
            alt="O'ktamjon Komilov"/>
            </div>
        </div>
    )
}

export default Nav
