import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
function SignUp() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password
      }
     await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success('SignUp Successfully');
            navigate(from, { replace: true });
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.response){
            console.log(err)
            toast.error("Error: "+err.response.data.message);
        }
      })
    };

  return (
    <>
        <div>
        <div id="my_modal_3" className="flex h-screen items-center justify-center ">
        <div className="border-[2px] p-7 shadow-md rounded-md dark:bg-slate-600 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
           
           
            <Link to='/' className="text-3xl btn btn-m btn-circle btn-ghost absolute right-3 top-3">✕</Link>
            

            
            <h3 className="font-bold text-lg">SignUp</h3>
            
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter your name' className='w-80 py-1 px-3 border rounded-md outline-none'
                    {...register("fullname", { required: true })}
                />

                <br />
                {errors.fullname && <span className='text-sm text-teal-600'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter your email' className='w-80 py-1 px-3 border rounded-md outline-none'
                    {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-teal-600'>This field is required</span>}
            </div>
            
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="password" placeholder='Enter your password' className='w-80 py-1 px-3 border rounded-md outline-none'
                    {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-teal-600'>This field is required</span>}
            </div>

            <div className='flex justify-between mt-6 text-md'>
                <button className='bg-teal-600 text-white rounded-md px-3 py-1 hover:bg-teal-700 duration-200'>
                    SignUp
                </button>
                <p className='py-1'>
                    Have an account? <Link to='/' className='cursor-pointer underline text-teal-600 hover:text-teal-700 duration-200'>Login</Link>
                </p>
            </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default SignUp