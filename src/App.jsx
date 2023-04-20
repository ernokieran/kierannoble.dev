import { ViewportProvider, NotificationProvider, ProjectProvider } from '~/Context';
import Router from './Router';

function App() {

  return (
    <ViewportProvider>
      <NotificationProvider>
        <ProjectProvider>
          <Router />
        </ProjectProvider>
      </NotificationProvider>
    </ViewportProvider>
  )
}

export default App
