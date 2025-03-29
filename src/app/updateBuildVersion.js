import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const axios = require('axios'); // For fetching dynamic routes

// update the local build version to force reload the user to get latest css and javascript from server
const updateLocalBuildVersion = async () => {
  try {
    // Example: Replace with your API endpoint
    const { data } = await axios.post(
      `http://127.0.0.1/update-version-testing/update-local-build-version.php`,
      {
        protectionId: 'Nav##$56',
      }
    );
    console.log(data);
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
  }
};

updateLocalBuildVersion();

// update the online build version to force reload the user to get latest css and javascript from server
const updateOnlineBuildVersion = async () => {
  try {
    // Example: Replace with your API endpoint
    const { data } = await axios.post(
      `https://navratnajewellers.in/update-online-build-version.php`,
      {
        protectionId: 'Nav##$56',
      }
    );
    console.log(data);
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
  }
};

updateOnlineBuildVersion();
