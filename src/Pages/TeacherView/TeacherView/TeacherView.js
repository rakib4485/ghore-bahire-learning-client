import React from 'react';
import { Link } from 'react-router-dom';
import TeacherHeader from '../TeacherHeader/TeacherHeader';
import AddWeek from '../AddWeek/AddWeek';
import AddTask from '../AddTask/AddTask';

const TeacherView = () => {
    return (
        <div className='px-[10%] bg-[#F1F4F5] mb-10'>
             <div className='py-10'>
            <h1 className="text-[1.714rem] font-semibold">Big Data & Iot</h1>
            <p className='my-3 text-blue-400 flex gap-4'>
                <Link className='hover:underline'>Dashboard</Link> <span className='text-[#727577]'>/</span>
                <Link className='hover:underline'>Faculty of Science and Information Technology</Link> <span className='text-[#727577]'>/</span>
                <Link className='hover:underline'>Computer Science and Engineering</Link> <span className='text-[#727577]'>/</span>
                <Link className='hover:underline'>CSE Fall 2024</Link> <span className='text-[#727577]'>/</span>
                <Link className='hover:underline'>Courses</Link> <span className='text-[#727577]'>/</span>
                <Link className='hover:underline'>CSE 414</Link>
            </p>
            </div>
            <div>
                <TeacherHeader/>
                <AddWeek/>
                <AddTask/>
            </div>
        </div>
    );
};

export default TeacherView;