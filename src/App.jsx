import { BrowserRouter, Route, Routes } from "react-router-dom"
import TeachersPagas from "./pages/teachers/TeachersPages"
import StudentsPages from "./pages/student/StudentsPages"
import Layout from "./components/Layout"
import DashboardPages from "./pages/dashdoard/DashboardPages"

function App(){
  return(
    <BrowserRouter>
    <Routes>
  <Route element={<Layout/>}>
          <Route path='' element={<DashboardPages/>}/>
          <Route path='teachers' element={<TeachersPagas />} />
          <Route path='students' element={<StudentsPages />} />
  </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App     