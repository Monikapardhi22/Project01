import React from 'react'
import like from '../assets/like button.webp'
import xpost from '../assets/xpost.webp'
import pop from '../assets/pop out.png'

export default function Navbar({setSelectedView}) {
    // const [menuOpen, setMenuOpen] = useState(false);
   
   
 

  return (
    <div className='bg-gray-600 h-[58px] w-full flex flex-row justify-between items-center overflow-hidden'>
   <div>
        <div  className='flex '>
            <span className='text-2xl text-white font-semibold
         mt-2.5 mr-2.5 ml-2.5 text-[15px] text-shadow-white'>Massively</span>

       

            <ul className=' hidden md:flex   h-[40px] p-4   gap-3 border-[1px] border-gray-400 rounded-[2px]   justify-around items-center text-[15px]  font-bold text-white  border-solid  overflow-hidden mt-1.5  mr-1 ml-1 '>
                <li className='hover:bg-gray-500 hover:text-white  p-2 cursor-pointer '
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
                           <li className='hover:bg-gray-500 hover:text-white p-2 cursor-pointer'
                onClick={()=>setSelectedView('desktop')}>
                   <img src={pop} width="20" height="20" alt="popout" /> 
        
                    
                </li>
                        </a>
                    </li>
                </ul>
            </div>
   </div>
      <div className='flex font-bold text-white '>
        <ul className=' flex  w-[120px] h-[40px] p-4   gap-3 border-[1px] border-gray-400 rounded-[2px]   justify-around items-center text-[15px]  font-bold text-white  border-solid  overflow-hidden mt-1.5  mr-1 ml-1'>
            <li>
                 <a href='https://twitter.com/ajlkn' ><img src={like} height='30px' width='30px' className='cursor-pointer'/></a>
            </li>
            <li>
                 <a href='https://twitter.com/ajlkn'><img src={xpost} height='30px' width='30px' className='cursor-pointer'/></a>
            </li>
        </ul>
        <div className=' flex flex-row gap-3'>
            <a href='https://twitter.com/ajlkn' className='border-[1px] w-[70px] h-[40px] text-center border-solid border-gray-400 rounded-[2px]  gap-4  flex justify-center items-center font-bold text-white  overflow-hidden mt-1.5 p-1 mr-1 ml-1 hover:border-red-500 hover:border-2 hover:text-red-500 text-[15px]'>Back</a>
            <a href='/' className='bg-amber-400 text-white w-[160px] h-[40px] text-center  rounded-[2px] flex justify-around items-center   font-bold    overflow-hidden mt-1.5 p-1 mr-1 ml-1 text-[15px]'>
            Download <p className='font-light'>
              (620,299)</p></a>
        </div>
      </div>


      
       
      
    </div>
  )
}
