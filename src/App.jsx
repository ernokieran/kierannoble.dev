import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Harmony } from './Routes';
import { ProjectContext } from './Context';
import { useState } from 'react';
import AppLayout from './AppLayout';

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
    </ProjectContext.Provider>
  )
}

export default App
