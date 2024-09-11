import React from 'react';
import { MdGroups } from "react-icons/md";
import { FaBlackTie, FaEnvelope, FaFolder } from "react-icons/fa";

const HomeAbout = () => {
    const aboutContent = [
        {
            id: 1,
            name: 'Guidelines for Students',
            details: 'Students can get guidelines on the Blended Learning Center platform from here.',
            logo: <MdGroups className='text-5xl ml-2 pt-3 text-white'/>
        },
        {
            id: 1,
            name: 'Guidelines for Students',
            details: 'Students can get guidelines on the Blended Learning Center platform from here.',
            logo: <FaBlackTie className='text-5xl ml-2 pt-3 text-white'/>,
            style: ''
        },
        {
            id: 1,
            name: 'Guidelines for Students',
            details: 'Students can get guidelines on the Blended Learning Center platform from here.',
            logo: <FaFolder className='text-5xl ml-2 pt-3 text-white'/>
        },
        {
            id: 1,
            name: 'Guidelines for Students',
            details: 'Students can get guidelines on the Blended Learning Center platform from here.',
            logo: <FaEnvelope className='text-5xl ml-2 pt-3 text-white'/>
        },
    ]
    return (
        <div className='mx-[10%] mt-20'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='md:w-[60%] mx-auto'>
                    <h3 className="text-3xl font-bold text-center">What is COU E-Academic platform?</h3>
                    <p className='text-center mt-5'>Blended Learning Center is the digital teaching and learning hub of Cumilla University. The platform aims to connect teachers and students effectively allowing teachers to track progress of individual students and better facilitate their learning. </p>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-6'>
                        {
                            aboutContent.map(about => (
                                <div className='border shadow-[0_2px_5px_#1e4691] py-3 px-5 mt-5'>
                                    <div className='h-16 w-16 bg-blue-500 rounded-full -mt-8 mx-auto text-center'>
                                        {about.logo}
                                    </div>
                                    <h2 className="text-xl text-center font-bold my-5">{about.name}</h2>
                                    <p className="text-center mb-7">{about.details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;