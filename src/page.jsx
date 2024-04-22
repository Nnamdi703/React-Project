import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from './navbar';
import Footer from './App'

function Loading(){
  return(
    <div className="load0">Loading...</div>
  )
}


function Single() {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRepos = () => {
    fetch('https://api.github.com/users/Nnamdi703/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const RepoDetails = ({ repo }) => (
    <section>
    <div className="boxes-2">
      <h2 className="name-2">{repo.name}</h2>
      <p className="date-2">Start date: 18/12/2023</p>
      <p className="language-2">{repo.language === null ? "none" : repo.language}</p>
      <p className="visibility-2">Visibility: Public</p>
      <a href={repo.html_url} className="lin-2">View on GitHub</a> 
      </div>

      <div className="buttons">
      <button onClick={handlePrevPage} disabled={currentPage === 0} className="next-2">Prev</button>
      <button onClick={handleNextPage} disabled={currentPage === repositories.length - 1} className= "view-2" >Next</button>
      </div>
      <div className="las-2">
      <Link to="/" className="back">Back</Link>
      </div>
      </section>
    
  );

  return (
    // <BrowserRouter>
    <div>
       {isLoading ? <Loading /> : (repositories.length > 0 && <RepoDetails repo={repositories[currentPage]} />)}
      {/* <Footer/> */}
    </div>
    // </BrowserRouter>
  );
}

export default Single;

