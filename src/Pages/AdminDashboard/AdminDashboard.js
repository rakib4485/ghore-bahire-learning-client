import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
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
            const res = await fetch('https://ghore-baire-learning-server.vercel.app/users/');
            const data = await res.json();
            return data;
        }
    });

    const handleRole = () =>{
        const url = `https://ghore-baire-learning-server.vercel.app/user/update/${role}?email=${requestEmail}`;
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
            <div className="grid grid-cols-4">
                <div
                    onClick={() => handleTabClick(1)}
                    className={`cursor-pointer text-center px-4 py-2 ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                >
                    All Users
                </div>
                
                {/* Add more tabs as needed */}
            </div>

            <div className="mt-4">
                {activeTab === 1 &&
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            user.role === 'user' &&
                                            <tr key={i} className="hover">
                                                <th>{i + 1}</th>
                                                <th>{user.id}</th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td className='capitalize'>Student</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 2 &&
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (

                                            user.role === 'owner' ?
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user?.role !== 'admin' && <button className='btn btn-xs text-white btn-error' onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('delete'); setUserName(user.name)}}>Delete</button>}</td>
                                                </tr> :
                                                <></>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 3 &&
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Confirm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (

                                            user.role === 'request' ?
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user?.role !== 'admin' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('confirm'); setUserName(user.name)}} className='btn btn-xs text-white btn-success'>Confirm</button>}</td>
                                                </tr> :
                                                <></>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {activeTab === 4 &&
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (

                                            user.role === 'admin' ?
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user?.role !== 'admin' && <button className='btn btn-xs text-white btn-error' >Delete</button>}</td>
                                                </tr> :
                                                <></>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {/* Add content for more tabs as needed */}
            </div>
            <dialog id="request-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">{role === 'confirm'? `Do you really want to make ${userName} as a owner!!`: `Do you really want to Delete ${userName}!!`}</h2>
                    <p className='text-right'><button onClick={handleRole} className={`btn btn-outline ${role === 'confirm'? 'btn-success':'btn-error'} mt-5`}>{role === 'confirm'? 'Confirm' : 'Delete'}</button></p>

                </div>
            </dialog>
        </div>
    );
};

export default AdminDashboard;