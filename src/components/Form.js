import React from 'react'
import bgimg from '../assets/img.png';
import {useForm} from 'react-hook-form'; 
export default function Form() {


    const{register,handleSubmit,watch,formState:{errors}}=useForm()

    const onSubmit = data=>console.log(data);

    // console.log(watch('username'))

  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sample web form to accept user inputs in React</h2>
                <span>Register And Test the Working</span>
                <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username'/>
                    <input type="text" {...register("password")} placeholder='password'/>
                    <input type="text" {...register("confirmpwd")} placeholder='confirmpassword'/>
                    <input type="text" {...register("mobile",{ required: true,maxLength:10})} placeholder='mobile number'/>
                    {errors.mobile?.type==="required"&&"Mobile Number is Required"}
                    {errors.mobile?.type==="maxLength"&&"Max Length Exceed"}

                    <button className='btn'>Login</button>
                </form>
            </div>
            <div className="col-2">
                <img src={bgimg} alt=""/>
            </div>
        </div>
    </section>
  )
}
