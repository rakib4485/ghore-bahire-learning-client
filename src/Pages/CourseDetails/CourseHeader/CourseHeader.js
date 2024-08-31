import React from 'react';
import courseImg from '../../../assets/image (2).png'
import { Link } from 'react-router-dom';

const CourseHeader = () => {
    const weeks = [
        {
            weekNo: 1
        },
        {
            weekNo: 2
        },
        {
            weekNo: 3
        },
        {
            weekNo: 4
        },
        {
            weekNo: 5
        },
    ]
    return (
        <div className='p-6 bg-slate-300 rounded-md'>
            <div>
                <h2 className="text-xl font-semibold">Welcome To Big Data & Iot</h2>
            </div>
            <div className='text-center my-5'>
                {/* <img src={courseImg} alt="" className='text-center mx-auto' /> */}
            </div>
            <div className='font-serif	text-[#BA4A00] text-justify bg-white rounded-lg my-10'>
                <h2 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">welcome letter</h2>
                <div className='p-5'>
                    <h5 className="text-lg">Hello Everyone! </h5>
                    <h5 className="text-lg my-3">Welcome to Digital Image Processing (CSE 427) course for semester Fall 2023. This semester this course is designed to provide you support for fully online classes. This is a course that focuses on the blending of technology and education. A plenty of tutorials and resources are provided for you in the course. You will find here course content, reference books, course delivery plan, all kind of announcement and contact information </h5>
                    <h5 className="text-lg mb-10">Let’s make this semester a great semester and let us have a remarkable journey together.</h5>
                </div>
            </div>
            <div>
                <h4 className="text-xl font-bold my-5 text-[#D35400]">Course Instructor</h4>
                <div className='flex gap-6 items-center'>
                    <img src={`https://lh5.googleusercontent.com/wVI-Fbo6lnEahO2-jyD1u0rmbL9QfYtG6PyYBTeYaPBS6DXGPVMvhuZKykaLn7ay3PFTeKcFw479If4SQpVPEsnf8TmrC_lZ3BiB2WVcsNWgCsRTUKOI5_-QXUHjGT7996yTSs5o`} alt="" className='h-[200px] w-[200px]' />
                    <div className='text-[#727577] flex flex-col gap-5'>
                        <h5 className="text-lg"><strong>Name: </strong> Sharmin Akter</h5>
                        <h5 className="text-lg"><strong>Designation: </strong> Lecturer (Senior Scale)</h5>
                        <h5 className="text-lg"><strong>Room Number: </strong> 317-09, AB4</h5>
                        <h5 className="text-lg"><strong>Email: </strong> sharun@gmail.com</h5>
                        <h5 className="text-lg"><strong>Contact No: </strong>+880-123564893898</h5>
                    </div>
                </div>
            </div>
            <div className='font-serif text-justify bg-white rounded-lg my-10'>
                <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Course Rationale:</h4>
                <h5 className="text-lg text-justify p-5">
                    Digital Image Processing is a core subject of Computer Science and Engineering. It deals with various types of digital image processing techniques that are widely used in medical research and scientific analysis. The application area of image processing is huge which covers medical science, industry, military equipment, nuclear analysis, bioinformatics, traffic control and so on. With the advancement of various image processing techniques scientific community can analyze other planets in our galaxy..
                </h5>
            </div>
            <div className='font-serif text-justify bg-white rounded-lg my-10'>
                <h4 className="text-xl font-bold uppercase text-black bg-[#E4E9EF] py-5 rounded-t-lg pl-5">Quick Access link</h4>
                <div className="text-lg text-justify p-5 flex gap-4">
                    {
                        weeks.map((week, idx) => <div key={idx} className='bg-slate-300 px-3 py-2 rounded'>
                        <Link>Week - {week.weekNo}</Link>
                    </div>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default CourseHeader;