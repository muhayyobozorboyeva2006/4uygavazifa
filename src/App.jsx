import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import TeachersPagas from "./pages/teachers/TeachersPages"
import StudentsPages from "./pages/student/StudentsPages"
import Layout from "./components/Layout"
import DashboardPages from "./pages/dashdoard/DashboardPages"
import SingelTeacher from "./pages/singleteachers/SingelTeachers"
import SingelStudent from "./pages/singlestudent/SingleStudent"
import LoginPages from "./pages/login/LoginPages"
import { useState } from "react"

function App() {
  const [isLogin , setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPages setIsLogin={setIsLogin}/>}/>
        <Route element={(localStorage.getItem("auth") || false) ? <Layout /> : <Navigate to={"/"}/>}>
          <Route path='dashoard' element={<DashboardPages />} />
          <Route path='teachers' element={<TeachersPagas />} />
          <Route path='students' element={<StudentsPages />} />
          <Route path='teachers/:id' element={<SingelTeacher />} />
          <Route path='students/:id' element={<SingelStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App     