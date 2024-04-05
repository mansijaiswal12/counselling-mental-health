import React from 'react'
import '../index.css'

const Submit = () => {

  return (
    <main className=' bgsubmit flex justify-center'>
    <div className='flex sm:w-[50%] flex-col justify-center mt-20 flex-wrap m-6 rounded-lg  min-h-fullpx-6 py-12 lg:px-8' style={{border:" 2px solid black", backgroundColor:"rgb(240, 219, 222)"}}>
    <h1 className=" text-center text-4xl mt-12 font-bold">  Thank you!😊</h1>

     <p className='text-center sm:mt-10 text-2xl font-bold mt-10 sm:mb-16'>"name" your Appointment has been confirmed and our team will contact soon!</p>
      
   
     </div>
    </main>
    
  )
}

export default Submit
