import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'

import "./firebase"

import LoginPages from "./pages/LoginPages/LoginPages";
import CreatePages from "./pages/CreatePages/CreatePages";
import HomePages from "./pages/HomePages/HomePages";
import ErrorPages from "./pages/ErrorPages/ErrorPages";
import ForgotPages from "./pages/ForgotPages/ForgotPages";

import { RequireAuth } from "./hoc/RequireAuth";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<RequireAuth><HomePages /></RequireAuth>}></Route>

        <Route path="sign-up" element={<CreatePages />}></Route>
        <Route path="login" element={<LoginPages />}></Route>
        <Route path="forgot" element={<ForgotPages />}></Route>

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
