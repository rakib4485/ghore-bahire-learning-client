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
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import AdminRoutes from "./AdminRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageStudent from "../Pages/AdminDashboard/ManageStudent";
import AuthLayout from "../Layout/Main/AuthLayout/AuthLayout";
import TeacherView from "../Pages/TeacherView/TeacherView/TeacherView";
import ManageTeacher from "../Pages/AdminDashboard/ManageTeacher";
import ManageAdmin from "../Pages/AdminDashboard/ManageAdmin";
import TaskPage from "../Components/TaskPage";
import ViweTasks from "../Pages/ViewTasks/ViweTasks";

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
                path: 'course-edit/:id',
                element: <PrivateRoutes><TeacherView></TeacherView></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch (`https://ghore-baire-learning-server.vercel.app/course-edit/${params.id}`)
                }
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoutes><CourseDetails/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch (`https://ghore-baire-learning-server.vercel.app/course/${params.id}`)
                }
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile/></PrivateRoutes>
            },
            {
                path: '/course-details/:id/submit-task',
                element: <PrivateRoutes><TaskPage/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch (`https://ghore-baire-learning-server.vercel.app/course/${params.id}`)
                }
            },
            {
                path: '/course-details/:id/view-task',
                element: <PrivateRoutes><ViweTasks/></PrivateRoutes>,
                loader: ({params}) => {
                    return fetch (`https://ghore-baire-learning-server.vercel.app/course/${params.id}`)
                }
            },
            
        ]
    },
    {
        path: '/admin-dashboard',
        element: <PrivateRoutes><AdminRoutes><DashboardLayout/></AdminRoutes></PrivateRoutes>,
        children: [
            {
                path: '/admin-dashboard',
                element: <AdminDashboard/>
            },
            {
                path: '/admin-dashboard/manage-user',
                element: <ManageStudent/>
            },
            {
                path: '/admin-dashboard/manage-teacher',
                element: <ManageTeacher/>
            },
            {
                path: '/admin-dashboard/manage-administator',
                element: <ManageAdmin/>
            },
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