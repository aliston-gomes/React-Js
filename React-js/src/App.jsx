import "./App.css";
// import Portal from "./portals/Portal";
// import Refs from "./refs/Refs";
// import useIncrementor from "./customHooks/UseIncrementor";
// import UseMemo from "./Hooks/UseMemo";
// import UseCallBack from "./Hooks/UseCallBack";
// import UseReducer from "./Hooks/UseReducer";
import Child from "./contextApi/Child";
import ContextStore from "./contextApi/ContextStore";
import GrandChild from "./contextApi/GrandChild";
import STORE from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routingComps/About";
import Sides from "./routingComps/Sides.jsx";
import { Suspense, lazy, useState } from "react";
import Loader from "./routingComps/Loader.jsx";
const store = STORE;
function App() {
  let [x, setX] = useState(1);
  const PRIVATE_ROUTES = lazy(() => import("./routes/PrivateRoute.jsx"));
  const PUBLIC_ROUTES = lazy(() => import("./routes/PublicRoutes.jsx"));
  // const Inc = useIncrementor(false);
  return (
    <>
      {/* //!PORTALS */}
      {/* <Portal /> */}
      {/* //!REFS */}
      {/* <Refs /> */}
      {/* {Inc} */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <UseReducer /> */}
      {/* <ContextStore>
        <Child />
      </ContextStore> */}
      <Provider store={STORE}>
        <Router>
          {x == 0 && (
            <Suspense fallback={<Loader />}>
              <PRIVATE_ROUTES />
            </Suspense>
          )}
          {x == 1 && (
            <Suspense fallback={<Loader />}>
              <PUBLIC_ROUTES />
            </Suspense>
          )}
          {/* <Routes>
            <Route path="/" element={<GrandChild />}>
              <Route path="/about" element={<About />} />
              <Route path="/sides" element={<Sides />} />
            </Route>
            <Route path="/" element={<GrandChild />} />
            <Route path="/about" element={<About />} />
            <Route path="/sides" element={<Sides />} />
          </Routes> */}
        </Router>
      </Provider>
    </>
  );
}

export default App;
