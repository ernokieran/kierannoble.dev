import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProjectContext } from './Context';
import React, { useState } from 'react';
import AppLayout from './AppLayout';
import { Redirection, Error } from "./Components/Layout";
import { Redirections } from "./Data";
const Home = React.lazy(() => import('./Routes/Home'));
const Harmony = React.lazy(() => import('./Routes/Harmony'));
const Pinewood = React.lazy(() => import('./Routes/Pinewood'));
const ExperimentalImagery = React.lazy(() => import('./Routes/ExperimentalImagery'));
const PartsAndSections = React.lazy(() => import('./Routes/PartsAndSections'));

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
              <Route path="/project/pinewood" element={<Pinewood />} />
              <Route path="/project/experimental-imagery" element={<ExperimentalImagery />} />
              <Route path="/project/parts-and-sections" element={<PartsAndSections />} />
            </Route>
            {Redirections().map(redirection => (
              <Route path={redirection.from} element={<Redirection name={redirection.name} url={redirection.to} />} />
            ))}
            <Route path="*" element={<Error title="404" subtitle="That page could not be found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProjectContext.Provider>
  )
}

export default App
