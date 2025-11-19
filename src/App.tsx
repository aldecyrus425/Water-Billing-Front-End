import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminDashboard from "./pages/admin/Dashboard"
import MainLayout from "./components/layouts/MainLayout"
import Settings from "./pages/admin/Settings"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />}/>
        </Route>
      </Routes>


    </>
  )
}

export default App
