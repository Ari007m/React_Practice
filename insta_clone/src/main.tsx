import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewStory from './viewStory.tsx';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/story/:id",
      element:<ViewStory/>
    }
  ]
);

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router}/>

)
