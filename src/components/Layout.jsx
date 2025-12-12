import { Outlet } from "react-router-dom"
import SideborLayout from "./SideborLayout"

function Layout(){
    return(
        <>
        <SideborLayout/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default Layout