import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";

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
      </Routes>
    </>
  );
}

export default App;
