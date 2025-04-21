import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';
import Pastes from './components/Pastes';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
      <Navbar />
      <Home />
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar />
        <Pastes />
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    }
  ]
);
function App() {
  

  return (
   <>
    <RouterProvider router={router}>
    
    </RouterProvider>
   </>
  )
}

export default App
