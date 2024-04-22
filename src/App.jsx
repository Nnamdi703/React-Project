import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar  from "./navbar";
import Single from './page'
import Error from './Errpage'


function Loading(){
  return(
    <div className="load0">Loading...</div>
  )
}

function Begin() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchRepos = () => {
    fetch('https://api.github.com/users/Nnamdi703/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  const UserRepo = () => {
    return repositories.map(repo => (
      <li key={repo.id} className="boxes">
        <a href={repo.html_url}className="name">{repo.name}</a>
        <p className="date">Start date: 18/12/2023</p>
        <p className="language">{repo.language === null ? "none" : repo.language}</p>
        <p className="visibility">Visibility: Public</p>
      </li>
      
    ));
  }

  return (
    <section >
      {isLoading? <Loading/>:<UserRepo />}
      {/* <UserRepo /> */}
      <div className="buttons">
      <Link to="/single" className="next">Next</Link>
      <Link to="error" className="view">BIO</Link>
      </div>
    </section>
  );
}

function Footer(){
  return(
  <section className="footer">
    <p> &copy;  All Rights Reserved</p>
  </section>
  )
}


function Start(){
  return(
    <BrowserRouter>
    <section>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="/single" element={<Single />} />
        <Route path="/error" element={<Error />}/>
      </Routes>
      <Footer/>
    </section>
    </BrowserRouter>
  )
}

export default Start;
