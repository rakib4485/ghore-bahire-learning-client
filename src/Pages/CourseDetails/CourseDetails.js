import React, { useContext } from 'react';
import CourseHeader from './CourseHeader/CourseHeader';
import CourseWeeks from './CourseWeeks/CourseWeeks';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useJoin from '../../hooks/useJoin';
import EnrollmentPage from '../../Components/EnrollmentPage';
import Loading from '../../Components/Loading/Loading';

const CourseDetails = () => {
    const { user } = useContext(AuthContext)
    const course = useLoaderData();

    const [isJoin, isJoinLoading] = useJoin(user?.email, course?._id);
    if(isJoinLoading){
        return <Loading/>
    }
    return (
        <div>
            {
                isJoin ?
                    <div className='px-[10%] bg-[#F1F4F5]'>
                        <div className='py-10'>
                            <h1 className="text-[1.714rem] font-semibold">{course.courseName}</h1>
                            <p className='my-3 text-blue-400 flex gap-4 flex-wrap'>
                                <Link className='hover:underline'>Dashboard</Link> <span className='text-[#727577]'>/</span>
                                <Link className='hover:underline'>Faculty of Science and Information Technology</Link> <span className='text-[#727577]'>/</span>
                                <Link className='hover:underline'>Computer Science and Engineering</Link> <span className='text-[#727577]'>/</span>
                                <Link className='hover:underline'>CSE Fall 2024</Link> <span className='text-[#727577]'>/</span>
                                <Link className='hover:underline'>Courses</Link> <span className='text-[#727577]'>/</span>
                                <Link className='hover:underline'>{course.courseCode}</Link>
                            </p>
                        </div>
                        <CourseHeader course={course} />
                        <CourseWeeks course={course} />
                    </div>
                    :
                    <EnrollmentPage course={course}/>
            }
        </div>
    );
};

export default CourseDetails;