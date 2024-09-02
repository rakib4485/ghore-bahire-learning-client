import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import useTeacher from '../../hooks/useTeacher';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import toast from 'react-hot-toast';
import { MdEdit } from 'react-icons/md';
import bg from '../../assets/course-bg.jpg'

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext)
    const [isTeacher] = useTeacher(user?.email);

    const { data: currentUser = [], isLoading, refeatch } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/login-user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(currentUser)

    const {data: courses = []} = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-added-course?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleEditProfile = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const city = form.city.value;
        const country = form?.country?.value || " ";
        const designation = form?.designation?.value || " ";
        const room = form?.room?.value || " ";
        const contact = form?.contact?.value || "";


        const info = {
            name,
            city,
            country,
            designation,
            room,
            contact
        }
        console.log(info);
        const userInfo = {
            displayName: name
        }
        updateUser(userInfo)
            .then(() => {
                fetch(`http://localhost:5000/edit-profile?email=${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success("Your Profile is update successfully");
                        //   navigate(from, { replace: true })
                    })
            })
    }
    const getCardStyle = (index) => {
        switch (index % 3) {
          case 0: // For 1st, 4th, 7th, etc.
            return 'bg-[#794F22]';
          case 1: // For 2nd, 5th, 8th, etc.
            return 'bg-[#7C2F2F]';
          case 2: // For 3rd, 6th, 9th, etc.
            return 'bg-[#204E8A]';
          default:
            return '';
        }
      };
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
                            fetch(`http://localhost:5000/edit-profile-picture?email=${user?.email}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(userInfo)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    toast.success("Your Profile is update successfully");
                                    closeModal('image-modal');
                                    //   navigate(from, { replace: true })
                                })
                            
                        })
                        .then()

                }
            })

    }

    if (isLoading) {
        <Loading />
    }
    return (
        <div className='mx-[10%] my-10'>
            <h2 className="text-[1.714rem] font-semibold uppercase text-[#37474f] text-Poppins">{user?.displayName}</h2>
            <p className='flex gap-4 items-center my-3'><Link to='/my' className='text-blue-400 hover:underline'>Dashboard</Link> <span>/</span> <Link className='text-blue-400 hover:underline'>Profile</Link></p>

            <div className='flex gap-6 mt-5'>
                <div className='bg-white px-4 py-10 w-[30%] h-[250px] rounded'>
                    <div className="avatar mx-auto">
                        <div className="w-20 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt='' /> :
                                    <FaUserAlt className='text-[65px] ml-2 mt-4' />
                            }
                        </div>
                        <MdEdit className='-ml-5 text-2xl cursor-pointer' onClick={() => document.getElementById('image-modal').showModal()} />
                    </div>
                    <div>
                        <h2 className="text-2xl text-center mt-5">{user?.displayName} {` `} {currentUser.id}</h2>
                    </div>
                </div>
                <div className='w-[70%] bg-white rounded max-h-[500px] overflow-auto'>
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Courses" defaultChecked />
                        <div role="tabpanel" className="tab-content p-10">
                            <div className='grid grid-cols-2 gap-6'>
                            {
                                courses.map((course, index) => 
                                    <Link to={`/course-details/${course._id}`}>
                            <div className='h-44 relative group overflow-hidden' style={{
                                background: `url(${bg})`, backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                                
                            }}>
                                <div className={ `${getCardStyle(index)} text-white p-3 w-full absolute bottom-0 group-hover:scale-110 duration-500`}>
                                        <h5 className="text-lg font-semibold">{course.courseSemester}</h5>
                                        <h4 className="text-xl font-semibold">{course.courseName}</h4>
                                    </div>
                                <div className='items-center justify-center h-full w-full backdrop-brightness-50 bg-white/10 hidden group-hover:block duration-500'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                    <h4 className="text-xl font-bold text-white">View Course</h4>
                                    </div>
                                </div>
                            </div>
                            </Link>
                                )
                            }
                            </div>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_1"
                            role="tab"
                            className="tab"
                            aria-label="Edit Profile"
                        />
                        <div role="tabpanel" className="tab-content p-10">
                            <div>
                                <form onSubmit={handleEditProfile} className='flex flex-col gap-2'>
                                    <div className='grid grid-cols-4 items-center'>
                                        <div><label className='font-semibold'>Full Name</label></div>
                                        <div className="col-span-3">
                                            <input type="text" name='name' className='input input-bordered input-blue-400 w-full' defaultValue={user?.displayName} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-4 items-center'>
                                        <div><label className='font-semibold'>Email</label></div>
                                        <div className="col-span-3">
                                            <input type="text" name='email' className='input input-bordered input-blue-400 w-full' defaultValue={user?.email} disabled />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-4 items-center'>
                                        <div><label className='font-semibold'>City / Town</label></div>
                                        <div className="col-span-3">
                                            <input type="text" name='city' className='input input-bordered input-blue-400 w-full' defaultValue={currentUser?.userInfo?.city} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-4 items-center'>
                                        <div><label className='font-semibold'>Country</label></div>
                                        <div className="col-span-3">
                                            <input type="text" name='country' className='input input-bordered input-blue-400 w-full' defaultValue={currentUser?.userInfo?.country} />
                                        </div>
                                    </div>
                                    {
                                        isTeacher &&
                                        <div className='grid grid-cols-4 items-center'>
                                            <div><label className='font-semibold'>Room No</label></div>
                                            <div className="col-span-3">
                                                <input type="text" name='room' className='input input-bordered input-blue-400 w-full' defaultValue={currentUser?.userInfo?.room} />
                                            </div>
                                        </div>
                                    }
                                    {
                                        isTeacher &&
                                        <div className='grid grid-cols-4 items-center'>
                                            <div><label className='font-semibold'>Designation</label></div>
                                            <div className="col-span-3">
                                                <input type="text" name='designation' className='input input-bordered input-blue-400 w-full' defaultValue={currentUser?.userInfo?.designation} />
                                            </div>
                                        </div>
                                    }
                                    {
                                        isTeacher &&
                                        <div className='grid grid-cols-4 items-center'>
                                            <div><label className='font-semibold'>Contact No</label></div>
                                            <div className="col-span-3">
                                                <input type="text" name='contact' className='input input-bordered input-blue-400 w-full' defaultValue={currentUser?.userInfo?.contact} />
                                            </div>
                                        </div>
                                    }
                                    <input type="submit" value='Submit' className='btn btn-primary' />
                                </form>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
};

export default Profile;