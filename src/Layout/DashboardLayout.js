import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../Components/Loading/Loading';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const DashboardLayout = () => {
    const { user, loading, updateUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);
    const [isAdmin] = useAdmin(user?.email)

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };

    const cloudUpload = (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "rentGo")
        data.append("cloud_name", "dunquub4z")

        fetch("https://api.cloudinary.com/v1_1/dunquub4z/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if (data.url) {
                    const userInfo = {
                        photoURL: data.url
                    }
                    updateUser(userInfo)
                        .then(() => {
                            closeModal('image-modal');
                        })
                        .then()

                }
            })

    }

    const makeMeOwner = () => {
        const url = `https://ghore-baire-learning-server.vercel.app/user/update/request?email=${user?.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    closeModal('owner-modal');
                    toast.success('Owner Request Send Successfully!!')
                    setDisabled(true);
                }
            })
    }

    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />

                </div>
                <div className="drawer-side min-h-full ">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay bg-[#2B3440]"></label>

                    <ul className="p-4 min-h-full w-[300px] bg-[#2B3440] text-white gap-5 flex flex-col">
                        {/* Sidebar content here */}
                        <div className='mt-5 md:w-[280px] px-5 text-white border-b-2 pb-5 '>
                            <div className="avatar">
                                <div className="w-20 ml-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        user?.photoURL ?
                                            <img src={user?.photoURL} alt='' /> :
                                            <FaUserAlt className='text-[65px] ml-2 mt-4' />
                                    }
                                </div>
                                <MdEdit className='-ml-5 text-2xl cursor-pointer' onClick={() => document.getElementById('image-modal').showModal()} />
                            </div>
                            <h3 className="text-lg font-semibold text-white text-center" data-tip={`${user?.displayName}`}>{user?.displayName.length > 15 ? user.displayName.slice(0, 15) + '...' : user.displayName}</h3>
                        </div>
                        <li className='hover:text-orange-600 cursor-pointer text-center'><Link to='/admin-dashboard'>All Students</Link></li>
                        {
                            isAdmin && <>
                                <li className='hover:text-orange-600 cursor-pointer text-center'><Link to='/admin-dashboard/manage-user'>Manage Users</Link></li>
                                <li className='hover:text-orange-600 cursor-pointer text-center'><Link to='/admin-dashboard/manage-teacher'>Manage Teacher</Link></li>
                                <li className='hover:text-orange-600 cursor-pointer text-center'><Link to='/admin-dashboard/manage-administator'>Manage Administator</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <dialog id="image-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={cloudUpload}>
                        <input type="file" name='image' className="file-input file-input-bordered file-input-primary w-full mt-10" />
                        <p className='text-right'><button type='submit' className="btn btn-outline btn-primary mt-5">Primary</button></p>
                    </form>
                </div>
            </dialog>

            <dialog id="owner-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">Do you really want to send a request for make you owner!!</h2>
                    <p className='text-right'><button onClick={makeMeOwner} className="btn btn-outline btn-primary mt-5">Request</button></p>

                </div>
            </dialog>
        </div >
    );
};

export default DashboardLayout;