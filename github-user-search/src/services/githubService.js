import axios from 'axios';

// Get the API key from the .env file
const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

// Function to fetch user data from GitHub
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}` // Use the API key if needed
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
