import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  // Assuming you have the service file to handle API calls

const Search = () => {
  const [username, setUsername] = useState('');  // To store the input username
  const [userData, setUserData] = useState(null);  // To store the fetched user data
  const [loading, setLoading] = useState(false);   // To show loading state
  const [error, setError] = useState(null);        // To handle any errors

  // Function to handle form submission and fetch GitHub user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);     // Set loading state to true
    setError(null);       // Clear any previous errors
    setUserData(null);    // Clear previous user data

    try {
      const data = await fetchUserData(username);  // Fetch user data from GitHub API
      setUserData(data);    // Store the user data if successful
    } catch (error) {
      setError("Looks like we cant find the user.");  // Exact message without apostrophe
    } finally {
      setLoading(false);  // Set loading state to false
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}  {/* Display Loading... when fetching data */}

      {error && <p>{error}</p>}  {/* Display exact error message: Looks like we cant find the user */}

      {userData && (  // Only display user info if data is fetched successfully
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <h2>{userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
