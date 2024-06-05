import Navbar from "../../components/navbar/Navbar"
import { Outlet } from "react-router-dom"
import NextPage from "../../components/nextPage/NextPage"

function NavbarWrapper() {
    return (
        <>
            <Navbar />
            <NextPage />
            <Outlet />
        </>
    )
}

export default NavbarWrapper