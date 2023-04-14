import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCard from './Views/AddCard'
import Home from './Views/Home'


const router = createBrowserRouter([

  {
    path: '/',
    element:<Home />
  },
  {
    path: '/Add',
    element: <AddCard />
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router= { router }/>
    </div>
  )
}

export default App
