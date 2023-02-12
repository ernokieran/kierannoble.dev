import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectContext } from './Context';
import React, { useState } from 'react';
import AppLayout from './AppLayout';
const Home = React.lazy(() => import('./Routes/Home'));
const Harmony = React.lazy(() => import('./Routes/Harmony'));

function App() {
  const [project, setProject] = useState('home');

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project">
              <Route path="/project/harmony" element={<Harmony />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* TO DO: this needs an error boundary */}
      {/* TO DO: this needs an error page somewhere */}
    </ProjectContext.Provider>
  )
}

export default App
