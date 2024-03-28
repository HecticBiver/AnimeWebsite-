import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SingleAnime from "./pages/singleAnime";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <SingleAnime />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
