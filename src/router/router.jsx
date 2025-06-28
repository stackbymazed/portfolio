import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import AboutMe from "../Components/AboutMe/AboutMe";
import Projects from "../Components/Projects/projects ";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/about',
                Component: AboutMe
            },
            {
                path: '/projects',
                Component: Projects
            },
        ]
    },
]);