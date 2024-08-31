import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ManageStudent = () => {
    const { user, loading } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(1);
    const [requestEmail , setRequestEmail ] = useState('');
    const [role, setRole] = useState('');
    const [userName, setUserName] = useState('')

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/');
            const data = await res.json();
            return data;
        }
    });

    const handleRole = () =>{
        const url = `http://localhost:5000/users/update/${requestEmail}?action=${role}`;
        fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        refetch();
                        closeModal('request-modal');
                        toast.success((role === 'confirm'? 'Owner Request Accept Successfully!!' : 'Owner Deleted Successfully!!'));
                    }
                })
    }
    return (
        <div>
             <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Make Teacher</th>
                                        <th>Make Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td className='capitalize'>{user?.role === 'user'? "student": user?.role}</td>
                                                    <td>{user?.role !== 'teacher' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('teacher'); setUserName(user.name)}} className='btn btn-xs text-white btn-success'>Make Teacher</button>}</td>
                                                    <td>{user?.role !== 'admin' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('admin'); setUserName(user.name)}} className='btn btn-xs text-white btn-success'>Make Admin</button>}</td>
                                                </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <dialog id="request-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">{role === 'teacher'? `Do you really want to make ${userName} as a Teacher!!`: `Do you really want to make ${userName} as a Admin!!`}</h2>
                    <p className='text-right'><button onClick={handleRole} className={`btn btn-outline 'btn-success'} mt-5`}>{role === 'teacher'? 'Make Teacher' : 'Make Admin'}</button></p>

                </div>
            </dialog>
        </div>
    );
};

export default ManageStudent;