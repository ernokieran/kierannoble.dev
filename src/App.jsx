import { ProjectContextProvider, ViewportContextProvider } from '~/Context';
import Router from './Router';

function App() {

  return (
    <ViewportContextProvider>
      <ProjectContextProvider>
        <Router />
      </ProjectContextProvider>
    </ViewportContextProvider>
  )
}

export default App
