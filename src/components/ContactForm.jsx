// import React from 'react'
// import { useState } from 'react'


// const ContactForm = () => {
//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     const [mob, setmob] = useState('')
//     const [date, setdate] = useState('')
    
//     const handleSubmit = (e) => {
//     e.preventDefault()
//     }
    
//   return (
//     <div className='flex justify-center mt-5'>
//         <form  className='flex  flex-col 	'>
//       <label htmlFor="">Name</label>
//       <input placeholder='enter your name'  />

//       <label htmlFor="">Email-id</label>
//       <input placeholder='enter your email-id' />

//       <label htmlFor="">Mobile-no</label>
//       <input placeholder='enter your mob no' />

//       <label htmlFor="">Appointment Date</label>
//       <input type='date' /> 
//       <button type='submit'>Book Appointment Now</button>
      
//       </form>
     
//     </div>
//   )
// }

// export default ContactForm


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'

export default function ContactForm() {
  const [name,setname] = useState("")
  const [mobileno,setmobno] = useState('')
  const [email,setemail] = useState('')
  const [date,setdate] = useState('')
  const [time,settime] =useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,mobileno,email,date,time)
    axios.post("http://localhost:8080/contactus",{name,email,mobileno,date,time})
    .then((result) => {
      console.log(result)
      toast.success("successfully submited")
    })
    .catch((err) =>
    console.log(err)
      )
  }
  return (
    <>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact Us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                enter your name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                 
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                enter your email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                 
                 
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                enter your mobile no
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  value={mobileno}
                  onChange={(e) => setmobno(e.target.value)}
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="" type = 'date' className="block text-sm font-medium leading-6 text-gray-900">
                  Appointment date
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                  
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            
            </div>
           

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

