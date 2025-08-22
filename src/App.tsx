import React, { useState } from 'react';
import './App.css';
import Desktop from './components/os/Desktop';
import StartupScreen from './components/os/StartupScreen';

function App() {
  const [showStartup, setShowStartup] = useState(true);

  const handleStartupComplete = () => {
    setShowStartup(false);
  };

  return (
    <div className="App">
      {showStartup ? (
        <StartupScreen onComplete={handleStartupComplete} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;
