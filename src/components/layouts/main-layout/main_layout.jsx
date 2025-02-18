import { Outlet } from "react-router-dom"
import Footer from "../footer/footer"
import Header from "../header/header"
import NavBar from "../nav/nav"

function MainLayout() {
    return <>
        <Header/>
        <NavBar/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </>
}

export default MainLayout