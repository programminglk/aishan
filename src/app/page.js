import Image from 'next/image'

import app_vals from './locales/app_values';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">

      <div className='flex flex-col sm:flex-row'>
        
        {/* left panel. i.e game selection pannel */}
        <div className='flex flex-col bg-gray-300 p-2 items-center sm:w-3/12 sm:items-start sm:min-h-screen'>
          <p className='text-md text-black-100 sm:pt-5 sm:pl-2 sm:pb-4'> Select Game</p>
          
          {
            app_vals.game_list.map((game, index) => {
              return (
                <button key={index} className='bg-gray-100 p-2 m-2 
                rounded-md hover:bg-gray-500'>
                  {game}
                </button>
              )
            })
          }
        </div>

        {/* right panel. i.e game display pannel */}
        <div className='flex flex-col bg-gray-100 p-2 sm:w-9/12 items-start sm:min-h-screen'>
        
          {/* Thesis outline, i.e drop outer container */}
          <div className='flex flex-col w-full h-3/5'>
            
            {/* Abstract div */}
            <div className='flex flex-col'>
     
              <div className='flex flex-row rounded-sm w-1/4 justify-center pl-3 pr-3 pt-1 pb-1 bg-gray-700'>
                <p className='text-md text-white'> Abstract </p>
              </div>
    
              {/* elements drop container */}
              <div className='flex flex-col ml-5 mt-2 bg-blue-200'>
                hi
              </div>
            </div>
          </div>

          <hr className='w-full border-1 border-gray-300 my-2' />

          {/* bag of elements */}
          <div className='flex flex-row flex-wrap'>

            {
              app_vals.thesis_elements.sort(() => Math.random() - 0.5).map((element, index) => {
                return (
                  <div key={index} className='flex justify-center bg-green-200 p-2 m-2 
                  rounded-md hover:bg-gray-500 text-black hover:text-white text-sm'>
                    {element}
                  </div>
                )
              })
            }

          </div>
        
        </div>


      </div>

    </main>
  )
}
