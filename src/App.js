import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const appRoutes = createBrowserRouter([
    {path:'/' , element:<Body />},
    {path:'/browse', element:<div><h1>Browse</h1></div>}
  ])
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
