import React from 'react';
import { Link } from 'react-router-dom';

const EnrolledStudentModal = ({ student }) => {
    return (
        <div>
            <input type="checkbox" id="enroll-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="enroll-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold capitalize">Enter The basic information of enrolled students</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    {/* <th>Date</th>
                                    <th>Task</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student.map((user, i) => (
                                        <tr key={i} className="hover">
                                            <td>
                                                <img src={user.image} alt='' className='h-16 w-16 rounded-full' />
                                            </td>
                                            <td>{user.id}</td>

                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            {/* <td>{user.date}</td>
                                            <td className='capitalize'><Link target='_blank' to={user.task} className='btn btn-xs btn-success'> View Task</Link></td> */}
                                            {/* <td>{user?.role === 'teacher' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('delete'); setUserName(user.name)}} className='btn btn-xs text-white btn-error'>Delete Teacher</button>}</td> */}
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledStudentModal;