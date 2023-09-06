import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Create this component separately

function FirstScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div>
      <button onClick={openSidebar}>Open Sidebar</button>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}

export default FirstScreen;
