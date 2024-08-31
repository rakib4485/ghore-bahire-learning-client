import React from 'react';
import bg from '../../assets/course-bg.jpg'
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
        // {
        //     id: 5,
        //     name: 'Machine Learning',
        //     semester: 'CSE Spring 2024',
        //     bg: 'bg-[#794F22]'
        // }
    ]
    return (
        <div className='px-[8%] bg-[#F1F4F5]'>
            <h2 className="text-2xl font-semibold py-10">COU E-Learing System Dashboard</h2>
            <div className='p-4 rounded-md bg-white'>
                <h4 className="text-xl font-semibold">Recently Joined Courses</h4>

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
        </div>
    );
};

export default Dashboard;