import { ProjectContext } from './Context';
import React, { useState } from 'react';
import Router from './Router';

function App() {
  const [project, setProject] = useState('home');

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <Router />
    </ProjectContext.Provider>
  )
}

export default App
