import React from "react";
import { Link } from "react-router-dom";

function Error (){
    return(
        <section className="error-page">
        <h1 className="oops">Oops!</h1>
        <p className="Not-found">Not Found,The page you are looking for does<br/> <span className="span"> not exist</span>.</p>
        <p className="err">404-Error</p>
        <Link to="/" className="error-bac">Back</Link>
        </section>

    )
}

export default Error;