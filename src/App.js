import Login from "./components/Login.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body.js";

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: '/', element: <Body/>,
      children: [
        { path: '/', element: <Login /> },
        { path: '/browse', element: <Browse /> },

      ]
    },
  ])
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRoutes} />
    </Provider>
  );
}


export default App;
