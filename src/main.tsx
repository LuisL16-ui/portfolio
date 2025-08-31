import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'))

// Remove the loading spinner when React hydrates
const removeLoadingSpinner = () => {
  const spinner = document.querySelector('.loading-spinner')
  if (spinner) {
    spinner.remove()
  }
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>,
)

// Remove loading spinner after React renders
setTimeout(removeLoadingSpinner, 100)
