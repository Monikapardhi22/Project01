import React,{useState,useEffect} from 'react'
import pic1 from '../assets/pic01.jpg'
import './Massively.css'

export default function GenericContent() {
     const [hide, setHide] = useState(false);
                          useEffect(() => {
              const handleScroll = () => {
                  if (window.scrollY > 200) {
                      setHide(true);
                  } else {
                      setHide(false);
                  }
              };
              window.addEventListener("scroll", handleScroll);
              return () => window.removeEventListener("scroll", handleScroll);
          }, []);
  return (
    <div>
       
                         
          
                          
                      
                      <div className='header overflow-hidden '>
            
            
            
            
                                <ul className={`massively-scroll ${hide ? "show" : ""}`}>
                                    <li className='hover:text-[#18bfef]'>
                                        <a href='#header'  >
                                            MASSIVELY
                                        </a>
                                    </li>
                                </ul>
            
            
                            </div>
                           
                            <nav className='nav ' >
            
                                <div>
                                    <span id='date'>
                                        April 25,2017
                                    </span>
            
                                    <h2>
                                        <a href='#' id='and-and' > THIS IS A GENERIC <br />PAGE</a>
                                    </h2>
                                    <p className='para w-[480px] italic font-medium text-[16px]'>
                                        Aenean ornare velit lacus varius enim ullamcorper proin aliquam
                                       
                                        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
                                        amet nullam sed etiam veroeros.
                                    </p>
            
                                </div>
            
                                <a href='#' className='image main'>
                                    <img src={pic1} alt='pic01' />
                                </a>
                                <p className='m-[26px] text-[20px] w-[500px] mt-[80px]' style={{ wordSpacing: '6px',fontWeight:'300' }}>
            
                                    Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in  faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent  rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris,consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
                                    Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sapien risus, commodo eget turpis at, elementum convallis enim turpis, lorem
                                    ipsum dolor sit amet nullam.
                                    <br />
                                    <br />
            
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam  venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                                    Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec  eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                    Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id
                                    ipsum.
            
                                </p>
            
                                <div className='foot'>
                                    <form method='post' action='#'>
                                        <div>
                                            <div>
                                                <label >
                                                    Name
                                                </label>
                                                <input type='text' placeholder='Enter Your Name Here' />
                                                <label>
                                                    Email
                                                </label>
                                                <input type='email' placeholder='Enter Your Email Here' />
            
                                                <label>Messages</label>
                                                <textarea rows='6'>
            
                                                </textarea>
            
                                                <button type='submit'>
                                                    SEND MESSAGE
                                                </button>
                                            </div>
                                        </div>
                                    </form>
            
                                    <hr className='border-2 w-full' />
            
                                    <div className='details'>
                                        <ul>
                                            <li>
                                                <h3>
                                                    ADDRESS
                                                </h3>
                                                <p>
                                                    1234 Somewhere Road #87257<br />
                                                    Nashville, TN 00000-00000
                                                </p>
                                            </li>
                                        </ul>
                                        <hr className=' border-2 w-full' />
            
                                        <ul>
                                            <li>
                                                <h3>
                                                    PHONE
                                                </h3>
                                                <p>
                                                    (000) 000-0000
                                                </p>
                                            </li>
                                        </ul>
                                        <hr className=' border-2 w-full' />
            
                                        <ul>
                                            <li>
                                                <h3>
                                                    EMAIL
                                                </h3>
                                                <a href='#' >info@untitles.tld</a>
                                            </li>
                                        </ul>
                                        <hr className=' border-2 w-full' />
            
                                        <ul>
                                            <li className='social'>
                                                <h3>
                                                    SOCIAL
                                                </h3>
                                                <a href='#' className='gap-3.5 ' >
                                                    <i class="fa-brands fa-twitter" ></i>
                                                    <i class="fa-brands fa-facebook"></i>
                                                    <i class="fa-brands fa-instagram"></i>
                                                    <i class="fa-brands fa-github"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
            
                                </div>
            
            
            
            
            
                            </nav>
                            <div className=' m-8 mb-20 ml-[80px]'>
            
                                <ul className='flex justify-around items-center text-lg font-bold text-white/40 '>
            
                                    <li className='m' >© Untitled    </li>
            
                                    <pre >     |     </pre>
                                    <li>
                                        DESIGN:<a href='https://html5up.net' className='text-white/25'>HTML UP    </a>
                                    </li>
                                    <pre >     |     </pre>
                                    <li>
                                        DEMO IMAGES : <a href='https://unsplash.com' className='text-white/25'>
                                            UNSPLASH</a>
                                    </li>
            
                                </ul>
                            </div>
                      </div>
                              
   
  )
}
