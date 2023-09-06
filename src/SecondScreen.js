import React, { useEffect, useState } from 'react';

function SecondScreen({ selectedProvider }) {
  const [apiDetails, setApiDetails] = useState(null);

  useEffect(() => {
    // Fetch API service details for the selected provider
    const fetchApiDetails = async () => {
      try {
        const response = await fetch(`https://api.apis.guru/v2/${selectedProvider}.json`);
        const data = await response.json();
        setApiDetails(data);
      } catch (error) {
        console.error('Error fetching API details:', error);
      }
    };

    if (selectedProvider) {
      fetchApiDetails();
    }
  }, [selectedProvider]);

  return (
    <div className="api-details">
      {apiDetails ? (
        <div>
          <h2>API Service Details for {selectedProvider}</h2>
          {/* Render API service details here */}
        </div>
      ) : (
        <p>Loading API details...</p>
      )}
    </div>
  );
}

export default SecondScreen;
