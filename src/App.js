import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Public/Routes";

function App() {
  return <RouterProvider router={routes}> </RouterProvider>;
}

export default App;
