import React, { useState } from 'react';

function Sidebar() {
  // Fetch the list of providers from the API (you can use Axios or fetch)
  const [providers, setProviders] = useState([]);

  // Define a function to fetch the list of providers
  const fetchProviders = async () => {
    try {
      const response = await fetch('https://api.apis.guru/v2/providers.json');
      const data = await response.json();
      setProviders(data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    }
  };

  // Handle clicks on a provider (you'll need to implement this)
  const handleProviderClick = (providerName) => {
    // Implement the logic to show Web APIs for the selected provider
  };

  return (
    <div className="sidebar">
      <h2>API Providers</h2>
      <ul>
        {providers.map((provider) => (
          <li key={provider} onClick={() => handleProviderClick(provider)}>
            {provider}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
