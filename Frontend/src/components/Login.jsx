import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
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
        
        email:data.email,
        password:data.password
      }
     await axios.post("http://localhost:4001/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
            
            toast.success('Successfully Loggedin!');
            navigate(from, { replace: true });
            // document.getElementById('my_modal_3'.close());
            setTimeout(()=>{
              
              window.location.reload()
              localStorage.setItem("Users",JSON.stringify(res.data.user));
            },1000)
                        
        }
        
      }).catch((err)=>{
        if(err.response){
            console.log(err)
        
        toast.error("Error: "+err.response.data.message);
        setTimeout(()=>{}, 2000);

        }
      })
    };

  return (
    <div>
        <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-600 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
            
            <Link to='/signup' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Login</h3>
            
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter your email' className='w-80 py-1 px-3 border rounded-md outline-none'
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type="password" placeholder='Enter your password' className='w-80 py-1 px-3 border rounded-md outline-none'
                {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='flex justify-between mt-6'>
                <button className='bg-teal-600 text-white rounded-md px-3 py-1 hover:bg-teal-700 duration-200'>
                    Login
                </button>
                <p>
                    Not Registered? <Link to='/signup' className='cursor-pointer underline text-teal-600 hover:text-teal-700 duration-200'>SignUp</Link>
                </p>
            </div>
            </form>
        </div>
    </dialog>
    </div>
  )
}

export default Login