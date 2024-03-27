import React from 'react'
import goals from '../assets/img/goals.jpg'

const Aboutus = () => {
  return (
    <>
      <div className=" flex justify-center flex-wrap bg-[#b0e2e6]  py-10 mr-8 ml-8">
        <h1 className=" flex justify-center text-xl font-bold md:text-4xl  flex-wrap  flex-wfont-semibold
          animate__animated animate__tada"  >
          Who We Are?
        </h1>
      </div>

      <div className="flex  mt-8 gap-20 ml-8 mr-8 md:flex-row flex-col" >
           <div className="flex mt-7 justify-center flex-col  md:w-[50%] w-full">
            <h1  className="text-3xl font-semibold text-center" >OUR GOALS</h1>
            <p className="text-left mx-2 lg:ms-[6rem] mt-4 leading-7 text-xl"> 
            TeenTherapy provides the best online therapy and counselling for teenagers,
            our aim is to help you better understand your thoughts, feelings, and behaviors,
             what they mean, and how they relate to your present day struggles and challenges.
              Together, we will work to deepen your awareness and understanding of your needs,
               desires, and patterns of relating, so you may experience a more authentic and
                fulfilling life.
            </p>
                
           </div>
           <figure className="lg:w-[30%] lg:mt-5 mx-2 w-[90%]  mb-6  ">
                 <img src={goals} alt="" style={{border:'2px solid black'}} className="rounded" />
                 </figure>
           </div>
           <div className=" flex justify-center flex-wrap bg-[#b0e2e6]  py-10 mr-8 ml-8">
              <h1 className=" flex justify-center text-xl font-bold md:text-4xl  flex-wrap  flex-wfont-semibold
               animate__animated animate__tada"  >
                TALK TO US
             </h1>
            
            </div>
            <div className= 'flex justify-center flex-wrap bg-[#b0e2e6]  mr-8 ml-8 mb-5 '>
             <p  className='text-xl mb-8 font-bold'>Have any questions? We are always open to talk about your counselor</p>
             </div>
             <div className="flex justify-center flex-wrap]  mr-8 ml-8 "> 
          <button className="border-2 border-black bg-[#3FCC73] py-2 px-2 rounded-lg font-bold  text-black-900 mb-5">Book Appointment Now</button>
          </div>

             

          
      
    </>
  )
}

export default Aboutus
