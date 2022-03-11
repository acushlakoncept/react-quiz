
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react'

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  return (
      <div className='bg-blue-500 h-screen flex justify-center items-center'>
       <div className="max-w-xl p-8">
         <form className='w-full rounded font-Lato font-normal text-white'>

            <div className="mb-4">
              <label className="block italic text-md font-bold mb-2" htmlFor="fullname">
                Your full given name:
              </label>
              <input className="appearance-none border border-white bg-transparent w-full p-2.5 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400" id="fullname" type="text" placeholder="John Doe" />
            </div>

            <div className="mb-4 pt-4 flex flex-col sm:flex-row">
              <div className="pr-4 mb-4">
                <label className="block italic text-md font-bold mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </div>

                  <DatePicker
                  className="border border-white bg-transparent pl-10 p-2.5 sm:text-sm leading-tight focus:outline-none focus:shadow-outline w-full placeholder-gray-400" 
                  selected={startDate} 
                  onChange={(date) => setStartDate(date)}
                   />
                </div>
              </div>

              <div>
                <label className="block italic text-md font-bold mb-2" htmlFor="country">
                  Country of residence of citizenship:
                </label>
                <input className="appearance-none text-white border border-white bg-transparent w-full p-2.5 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Canada" />
              </div>
            </div>

            <div className="my-4 pt-4">
              <label className="block italic text-md font-bold mb-2" htmlFor="school">
                What school do you plan to attend?
              </label>
              <input className="appearance-none border border-white bg-transparent rounded w-full p-2.5 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="school" type="text" placeholder="University of British Columbia" />
            </div>

            <div className="my-4 pt-4">
              <label className="block italic text-md font-bold mb-2" htmlFor="studyarea">
                Please take a moment to describe your intended area of study:
              </label>
              <textarea className="appearance-none border border-white bg-transparent rounded w-full p-2.5 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="studyarea" type="text" placeholder="Enter details here" rows="6" />
            </div>
          </form>
        </div>
      </div>
  )
}
