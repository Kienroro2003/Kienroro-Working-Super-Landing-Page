import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import { lazy } from "react";
// import TalkManagement from "./projects/talk-management/TalkManagement";
// import LaslesMaster from "./projects/lasles-master/LaslesMaster";
// import Jalan from "./projects/jalan/Jalan";
// import path from "path";

const TalkManagement = lazy(() =>
  import("./projects/talk-management/TalkManagement")
);
const LaslesMaster = lazy(() =>
  import("./projects/lasles-master/LaslesMaster")
);
const Jalan = lazy(() => import("./projects/jalan/Jalan"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <HomePage className="w-[960px] mx-auto mt-14"></HomePage>
              </>
            }
          ></Route>
        </Route>
        <Route
          path="/lasles-master"
          element={<LaslesMaster></LaslesMaster>}
        ></Route>
        <Route path="/jalan" element={<Jalan></Jalan>}></Route>
        <Route
          path="/talk-management"
          element={<TalkManagement></TalkManagement>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
