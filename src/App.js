import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { routes } from "./Routes/Public/Routes";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div>
            <CircleLoader
              color={"#232b84"}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </>
  );
}

export default App;
