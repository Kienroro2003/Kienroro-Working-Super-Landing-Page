import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import LaslesMaster from "./projects/lasles-master/LaslesMaster";
import Jalan from "./projects/jalan/Jalan";

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
      </Routes>
    </>
  );
}

export default App;
