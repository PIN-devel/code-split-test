import { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/Loading";

const LazyComponent = lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
