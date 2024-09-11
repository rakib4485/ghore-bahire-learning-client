import React from 'react';
import courseImg from '../../../assets/image (2).png'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CourseHeader = ({course}) => {
    const {data: instactor = [] } = useQuery({
        queryKey: ['instactor', course._id],
        queryFn: async () => {
            const res = await fetch(`https://ghore-baire-learning-server.vercel.app/single-user?email=${course.teacherProfile.email}`);
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='p-6 bg-slate-300 rounded-md'>
            <div>
                <h2 className="text-xl font-semibold">{course.courseName}</h2>
            </div>
            <div className='text-center my-5'>
                {/* <img src={courseImg} alt="" className='text-center mx-auto' /> */}

            </div>
            <div className='font-serif	text-[#BA4A00] text-justify bg-white rounded-lg my-10'>
                <h2 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">welcome letter</h2>
                <div className='p-5'>
                    <h5 className="text-lg">Hello Everyone! </h5>
                    <h5 className="text-lg my-3">Welcome to {course.courseName} ({course.courseCode}) course for semester {course.courseSemester}. This semester this course is designed to provide you support for fully online classes. This is a course that focuses on the blending of technology and education. A plenty of tutorials and resources are provided for you in the course. You will find here course content, reference books, course delivery plan, all kind of announcement and contact information </h5>
                    <h5 className="text-lg mb-10">Let’s make this semester a great semester and let us have a remarkable journey together.</h5>
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold my-5 text-[#D35400]">Course Instructor</h4>
                <div className='md:flex gap-6 items-center'>
                    <img src={instactor.image} alt="" className='h-[200px] w-[200px]' />
                    <div className='text-[#727577] flex flex-col gap-5'>
                        <h5 className="text-lg"><strong>Name: </strong> {instactor?.userInfo?.name}</h5>
                        <h5 className="text-lg"><strong>Designation: </strong> {instactor?.userInfo?.designation}</h5>
                        <h5 className="text-lg"><strong>Room Number: </strong> {instactor?.userInfo?.room}</h5>
                        <h5 className="text-lg"><strong>Email: </strong> {instactor?.email}</h5>
                        <h5 className="text-lg"><strong>Contact No: </strong>{instactor?.userInfo?.contact}</h5>
                    </div>
                </div>
            </div>
            <div className='font-serif text-justify bg-white rounded-lg my-10'>
                <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Course Rationale:</h4>
                <h5 className="text-lg text-justify p-5">
                    {course.rationale}
                </h5>
            </div>
            <div className='font-serif text-justify bg-white rounded-lg my-10'>
                <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Quick Access link</h4>
                <div className="text-lg text-justify p-5 flex gap-4">
                    {
                        course.weeks.map((week, idx) => <div key={idx} className='bg-slate-300 px-3 py-2 rounded'>
                        <Link>Week - {idx+1}</Link>
                    </div>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default CourseHeader;