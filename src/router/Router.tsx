import { createBrowserRouter } from "react-router-dom";
import NavbarWrapper from "../layouts/navbarWrapper/NavbarWrapper";
import Home from "../pages/home/Home";
import ProjectsAndSkills from "../pages/projectsAndSkills/ProjectsAndSkills";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projectsAndSkills", element: <ProjectsAndSkills /> },
    { path: "/contact", element: <Contact /> }
]

const Router = createBrowserRouter([{
    path: "/",
    element: <NavbarWrapper />,
    children: routes
}])
export default Router