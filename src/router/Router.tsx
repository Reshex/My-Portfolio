import { createBrowserRouter } from "react-router-dom";
import NavbarWrapper from "../layouts/navbarWrapper/NavbarWrapper";
import Home from "../pages/home/Home";
import ProjectsAndSkills from "../pages/projectsAndSkills/ProjectsAndSkills";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const routes = [
    { path: "/My-Portfolio/", element: <Home /> },
    { path: "/My-Portfolio/about", element: <About /> },
    { path: "/My-Portfolio/projectsAndSkills", element: <ProjectsAndSkills /> },
    { path: "/My-Portfolio/contact", element: <Contact /> }
]

const Router = createBrowserRouter([{
    path: "/My-Portfolio",
    element: <NavbarWrapper />,
    children: routes
}])
export default Router