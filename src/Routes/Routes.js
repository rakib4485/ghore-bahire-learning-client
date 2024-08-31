import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import TeacherDashboard from "../Pages/Dashboard/TeacherDashboard";
import TeacherRoutes from "./TeacherRoutes";
import Profile from "../Pages/Profile/Profile";
import AuthLayout from "../Layout/Main/AuthLayout/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>, 
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/my',
                element: <PrivateRoutes><Dashboard/></PrivateRoutes>
            },
            {
                path: '/my-teacher',
                element: <PrivateRoutes><TeacherRoutes><TeacherDashboard/></TeacherRoutes></PrivateRoutes>
            },
            {
                path: '/course-details',
                element: <PrivateRoutes><CourseDetails/></PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile/></PrivateRoutes>
            }
        ]
    },
    {
        path: '/login',
        element: <AuthLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/signup',
        element: <AuthLayout/>,
        children: [
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    }
]);

export default router;