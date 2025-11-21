import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminDashboard from "./pages/admin/Dashboard"
import MainLayout from "./components/layouts/MainLayout"
import Settings from "./pages/admin/Settings"
import Users from "./pages/admin/Users"
import UserActivity from "./pages/admin/UserActivity"
import Consumers from "./pages/admin/Consumers"
import ConsumerActivity from "./pages/admin/ConsumerActivity"
import Readings from "./pages/admin/Readings"
import Billings from "./pages/admin/Billings"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/users/all" element={<Users />} />
          <Route path="/users/activity" element={<UserActivity />} />
          <Route path="/consumers/all" element={<Consumers />} />
          <Route path="/consumer/activity" element={<ConsumerActivity />} />
          <Route path="/reading" element={<Readings />} />
          <Route path="/billing" element={<Billings />} />
          <Route path="/settings" element={<Settings />}/>
        </Route>
      </Routes>


    </>
  )
}

export default App
