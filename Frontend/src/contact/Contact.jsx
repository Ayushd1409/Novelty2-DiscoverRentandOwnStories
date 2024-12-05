import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <Navbar/>

      
        <div>
        <div id="my_modal_3" className="flex h-screen items-center justify-center bg-slate-50">
        <div className="border-[2px] p-7 shadow-md rounded-md dark:bg-slate-600 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
                
            <h3 className="font-bold text-lg items-center text-center">Contact Us</h3>
            
            <div className='mt-4 space-y-1  space-x-3'>
                {/* <span>Name</span> */}
                <br />
                <input type="text" placeholder='Name' className='w-80 py-3 px-3 border rounded-md outline-none'
                    {...register("fullname", { required: true })}
                />

                <br />
                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-3 space-y-1 space-x-3'>
                {/* <span>Email</span> */}
                <br />
                <input type="email" placeholder='Email' className='w-80 py-3 px-3 border rounded-md outline-none'
                    {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            <div className='mt-3 space-y-1 space-x-3'>
                {/* <span>Phone</span> */}
                <br />
                <input type="number" placeholder='Phone' className='w-80 py-3 px-3 border rounded-md outline-none'
                    {...register("number", { required: true })}
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='text-center mt-8 text-md'>
                <button className='bg-teal-600 text-white rounded-md px-3 py-3 hover:bg-teal-700 duration-200'>
                    Contact Us
                </button>
                
            </div>
            </form>
        </div>
    </div>
    </div>

      <Footer/>
    </>
  )
}

export default Contact