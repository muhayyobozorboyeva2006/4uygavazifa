import { Outlet } from "react-router-dom"
import SideborLayout from "./SideborLayout"
import { useState } from "react"

function Layout(){

    const [openSidebar, setopenSidebar] = useState(true)

    return(
        <>
        <SideborLayout openSidebar={openSidebar} setopenSidebar={setopenSidebar}/>
        <main className={openSidebar ? "ml-64" : "ml-20"}>
            <Outlet/>
        </main>
        </>
    )
}
export default Layout