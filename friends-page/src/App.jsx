import React from 'react';

import FriendsPage from './components/FriendsPage';
import PlanPreview from './components/PlanPreview';
import FriendsDashboard from './components/FriendsDashboard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Display all components together on one page */}

      <FriendsPage /> {/* This is your main Friends interface */}
      
      <hr style={{ margin: '40px 0' }} /> {/* Optional separator for clarity */}

      <FriendsDashboard /> {/* Dashboard section showing current plan statuses */}

      <hr style={{ margin: '40px 0' }} /> {/* Optional separator for clarity */}

      <PlanPreview planId={1} /> 
      {/* You might want to eventually connect this to a dynamic planId */}
    </div>
  );
}

export default App;
