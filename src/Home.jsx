import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'; 

const Home = ({ userInfo, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput) {
      onSearch(searchInput);
      navigate('/search');
    }
  };

  return (
    <div>
      {userInfo.name ? (
        <>
          <h1>Welcome, {userInfo.name}!</h1>
          <p>Email: {userInfo.email}</p>
        </>
      ) : (
        <div>
          <h1>Please <Link to="/login">Login</Link></h1>
        </div>
      )}

      <div className="search-container">
        <input 
          className="search-input"
          type="text" 
          placeholder="Search..." 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
