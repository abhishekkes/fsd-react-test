import { useState, useEffect } from "react";
import "./SearchPage.css";
const SearchPage = ({ searchText }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/posts/search?q=${searchText}`
        );
        const data = await response.json();
        setResults(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchText) {
      fetchResults();
    }
  }, [searchText]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Search Results for "{searchText}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Results Found!</p>
      )}
    </div>
  );
};

export default SearchPage;
