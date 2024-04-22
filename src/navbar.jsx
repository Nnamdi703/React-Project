import React from "react";
import {FaGithub} from 'react-icons/fa';

function Navbar(){
    return(
        <section className="Nbar">
            <div className="gimage"><FaGithub /></div>
            <h1>Nnamdi's GitHub</h1>
        </section>
    )
}

export default Navbar;