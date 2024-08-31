import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/course-bg.jpg'
import addCourse from '../../assets/add-course.png'
import useTeacher from '../../hooks/useTeacher';
import { AuthContext } from '../../contexts/AuthProvider';
import CourseAddModal from '../../Components/CourseAddModal/CourseAddModal';

const TeacherDashboard = () => {
    const { user } = useContext(AuthContext)
    const [isTeacher] = useTeacher(user?.email)
    console.log(isTeacher)
    const courses = [
        {
            id: 1,
            name: 'Big Data & Iot',
            semester: 'CSE Spring 2024',
            bg: 'bg-[#794F22]'
        },
        {
            id: 2,
            name: 'Big Data & Iot Lab',
            semester: 'CSE Spring 2024',
            bg: 'bg-[#7C2F2F]'
        },
        {
            id: 3,
            name: 'Web Development',
            semester: 'CSE Spring 2024',
            bg: 'bg-[#204E8A]'
        },
        {
            id: 4,
            name: 'Graphic Design',
            semester: 'CSE Spring 2024',
            bg: 'bg-[#175B43]'
        },
    ]
    return (
        <div className='px-[8%] bg-[#F1F4F5]'>
            <h2 className="text-2xl font-semibold py-10">COU E-Learing System Teacher Dashboard</h2>
            <div className='p-4 rounded-md bg-white'>
                <h4 className="text-xl font-semibold">My Courses</h4>

                <div className='grid grid-cols-4 gap-6 mt-10 cursor-pointer'>
                    {
                        courses.map(course => (
                            <Link to={`/course-details`}>
                                <div className='h-44 relative group overflow-hidden' style={{
                                    background: `url(${bg})`, backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div className={`${course.bg} text-white p-3 w-full absolute bottom-0 group-hover:scale-110 duration-500`}>
                                        <h5 className="text-lg font-semibold">{course.semester}</h5>
                                        <h4 className="text-xl font-semibold">{course.name}</h4>
                                    </div>
                                    <div className='items-center justify-center h-full w-full backdrop-brightness-50 bg-white/10 hidden group-hover:block duration-500'>
                                        <div className='flex items-center justify-center h-full w-full'>
                                            <h4 className="text-xl font-bold text-white">View Course</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='mt-20 bg-white rounded p-4'>
                <h4 className="text-xl font-bold">Add New Courses</h4>
                <div className='my-10'>
                    <label htmlFor="course-modal">
                        <div className='h-44 w-44 relative group overflow-hidden rounded-xl cursor-pointer mx-auto' style={{
                            background: `url(${addCourse})`, backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                        }}>
                            <div className='items-center justify-center h-full w-full backdrop-brightness-50 bg-white/30 hidden group-hover:block duration-500 rounded-xl'>
                                <div className='flex items-center justify-center h-full w-full'>
                                    <h4 className="text-xl font-bold text-white">Add Course</h4>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <CourseAddModal/>
        </div>
    );
};

export default TeacherDashboard;