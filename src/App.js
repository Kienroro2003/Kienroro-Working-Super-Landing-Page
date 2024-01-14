import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import { lazy } from "react";
// import BeautyProjectSecondPage from "./projects/beauty-product/BeautyProjectSecondPage";
// import BeautyProduct from "./projects/beauty-product/BeautyProduct";
// import TalkManagement from "./projects/talk-management/TalkManagement";
// import LaslesMaster from "./projects/lasles-master/LaslesMaster";
// import Jalan from "./projects/jalan/Jalan";
// import path from "path";

const TalkManagement = lazy(() =>
  import("./projects/talk-management/TalkManagement")
);
const BeautyProduct = lazy(() =>
  import("./projects/beauty-product/BeautyProduct")
);
const LaslesMaster = lazy(() =>
  import("./projects/lasles-master/LaslesMaster")
);
const Jalan = lazy(() => import("./projects/jalan/Jalan"));

const BeautyProjectSecondPage = lazy(() =>
  import("./projects/beauty-product/BeautyProjectSecondPage")
);

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
        <Route
          path="/beauty-product"
          element={<BeautyProduct></BeautyProduct>}
        ></Route>
        <Route
          path="/beauty-product-second-page"
          element={<BeautyProjectSecondPage></BeautyProjectSecondPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
