import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './UI/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let url = new URL('/sw.js', location.origin);
    url.searchParams.append('v', __APP_VERSION__);

    navigator.serviceWorker.register(url.href).then(
      function (registration) {
        console.log('Service worker registration successful', registration);
      },
      function (err) {
        console.log('Service worker registration failed', err);
      });
  })
}