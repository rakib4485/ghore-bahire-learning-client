import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ManageAdmin = () => {
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
        const url = `https://ghore-baire-learning-server.vercel.app/users/update/${requestEmail}?action=${role}`;
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
                                        <th>Delete Teacher</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => (
                                            user.role === 'admin' &&
                                                <tr key={i} className="hover">
                                                    <th></th>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td className='capitalize'>{user?.role === 'user'? "student": user?.role}</td>
                                                    <td>{user?.role === 'admin' && <button onClick={() => {document.getElementById('request-modal').showModal(); setRequestEmail(user.email); setRole('delete'); setUserName(user.name)}} className='btn btn-xs text-white btn-error'>Delete Teacher</button>}</td>
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
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">{`Do you really want to Delete ${userName} as a Admin!!`}</h2>
                    <p className='text-right'><button onClick={handleRole} className={`btn btn-outline btn-error} mt-5`}>Delete admin</button></p>

                </div>
            </dialog>
        </div>
    );
};

export default ManageAdmin;