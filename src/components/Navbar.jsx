import React,{useState} from 'react'
import like from '../'

export default function Navbar({  setSelectedView }) {
    const [menuOpen, setMenuOpen] = useState(false);
   
   
 

  return (
    <div className='bg-gray-600 h-[58px] w-full flex flex-row justify-between items-center overflow-hidden'>
   <div>
        <div  className='flex '>
            <span className='text-2xl text-white font-semibold
         mt-2.5 mr-2.5 ml-2.5'>Massively</span>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

            <ul className=' hidden md:flex justify-around items-center gap-4  font-bold text-white border-1 border-gray-300 border-solid rounded-md overflow-hidden mt-1.5  '>
                <li className='hover:bg-gray-500 hover:text-white p-2 cursor-pointer'
                onClick={()=>setSelectedView('desktop')}>
                    Desktop
                </li>
                <li 
                 onClick={()=>setSelectedView('tablet')}
                className='hover:bg-gray-500 hover:text-white p-2 cursor-pointer'>
                    Tablet
                </li>
                <li 
                 onClick={()=>setSelectedView('tablet-portrait')}
                className='hover:bg-gray-500 hover:text-white p-2 cursor-pointer'>
                    Tablet(Portrait)
                </li>
                <li 
                 onClick={()=>setSelectedView('mobile')}
                 className='hover:bg-gray-500 hover:text-white p-2 cursor-pointer'>
                    Mobile
                </li>
            </ul>
            <ul className=' hidden md:flex justify-around items-center mt-2.5 text-white font-bold ml-2'>
                    <li>
                        <a href='/' className='cursor-pointer'>
                            <span >
                                <img src='src/assets/pop out.png' width='30px' height='30px' />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
   </div>
      <div className='flex font-bold text-white '>
        <ul className=' flex    gap-3 border border-gray-300 rounded-md p-1 mr-2.5'>
            <li>
                <img src='src/assets/like button.webp' height='30px' width='30px' className='cursor-pointer'/>
            </li>
            <li>
                <img src='src/assets/xpost.webp' height='30px' width='30px' className='cursor-pointer'/>
            </li>
        </ul>
        <div className='mt-2'>
            <a href='/' className='border border-solid border-gray-300 rounded-md p-1.5 pl-2.5 pr-2 mr-2.5'>Back</a>
            <a href='/' className='bg-amber-400 text-white border border-solid border-gray-300 rounded-md p-1.5 pl-2.5 pr-2 mr-2.5'>
            Download <i className=' font-light'>(620,299)</i></a>
        </div>
      </div>


      {/* Dropdown  */}

      {menuOpen && (
        <div className="absolute top-[58px] left-0 w-full bg-gray-700 text-white font-bold flex flex-col md:hidden">
          <a href="/" className="p-2 hover:bg-gray-500"  onClick={()=>setSelectedView('desktop')}>Desktop</a>
          <a href="/" className="p-2 hover:bg-gray-500"  onClick={()=>setSelectedView('tablet')}>Tablet</a>
          <a href="/" className="p-2 hover:bg-gray-500"  onClick={()=>setSelectedView('tablet-protrait')}>Tablet (Portrait)</a>
          <a href="/" className="p-2 hover:bg-gray-500"  onClick={()=>setSelectedView('mobile')}>Mobile</a>
          <a href="/" className="p-2 hover:bg-gray-500 flex items-center gap-2">
            <img src="src/assets/pop out.png" width="20" height="20" alt="popout" /> 
          </a>
          
        </div>
      )}
       
      
    </div>
  )
}
