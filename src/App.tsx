import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'

import LoginPages from "./pages/LoginPages/LoginPages";
import CreatePages from "./pages/CreatePages/CreatePages";
import HomePages from "./pages/HomePages/HomePages";
import ErrorPages from "./pages/ErrorPages/ErrorPages";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePages />}></Route>

        <Route path="sign-up" element={<CreatePages />}></Route>
        <Route path="login" element={<LoginPages />}></Route>

        <Route path="*" element={<ErrorPages />}></Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
