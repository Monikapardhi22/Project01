import React ,{useState,useEffect} from 'react'
import './Massively.css'

export default function ElementsContent() {
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
      
                      <div className='header  '>
      
      
      
      
                          <ul className={`massively-scroll ${hide ? "show" : ""}`}>
                              <li className='hover:text-[#18bfef]'>
                                  <a href='#header'  >
                                      MASSIVELY
                                  </a>
                              </li>
                          </ul>
      
      
                      </div>
      
                      <div className='bg-white mr-[10px] ml-[10px] text-black flex flex-col  mt-[30px]  mb-[30px] overflow-hidden' >
                          <div className=''>
                              <a href='#' id='and-and' className='mt-6' > ELEMENTS <br />REFERENCE</a>
                          </div>
      
                         <h2 className=' font-extrabold text-[29px] mr-[10px] ml-[50px] mb-[30px] mt-20'>
                          TEXT
                         </h2>
                         <p className='mr-[10px] ml-[50px]  mb-[30px] mt-6'>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                        This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                        This is <u>underlined</u> and this is code: <code className='bg-amber-200 border'>for (;;) </code>.
                                        Finally, this is a <a href="#">link</a>.</p>
      
                                          <hr className='w-[400px] ml-36'/>
      
                                    <div className=' mr-[10px] ml-[50px] mb-[30px] mt-10'>
      
                                      <h2 className='font-extrabold text-[40px] mb-2.5'>
                                          HEADING LEVEL 2
                                      </h2>
                                      <h3 className='font-extrabold text-[33px] mb-2.5'>
                                          HEADING LEVEL 3
                                      </h3>
                                       <h4 className='font-extrabold text-[28px] mb-2.5'>
                                           HEADING LEVEL 4
                                      </h4>
                                       <h5 className='font-extrabold text-[20px] mb-2.5'>
                                          HEADING LEVEL 5
      
                                      </h5>
                                      <h6 className='font-extrabold text-[15px] mb-2.5'>
                                          HEADING LEVEL 6
                                      </h6>
      
      
                                    </div>
                                    <hr className='w-[400px] ml-36'/>
      
                                    <div className=' mr-[10px] ml-[50px] mb-[30px] '>
                                      <h2 className=' font-extrabold text-[29px] mr-[5px] ml-[22px] mb-[10px] mt-10'>
                          Heading with a Subtitle
                         </h2>
                         <i className='ml-[22px] mt-1 text-[20px]'>
                            Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                         </i>
                         <p className='mr-[10px] ml-[22px]  mb-[30px] mt-6 text-[20px]'>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
      
                         <h2 className=' font-extrabold text-[20px] mr-[5px] ml-[22px] mb-[10px] mt-10'>
                         Heading with a Subtitle
                         </h2>
                         <i className='ml-[22px] mt-1 text-[18px]'>
                            Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                         </i>
                         <p className='mr-[10px] ml-[22px]  mb-[30px] mt-6 text-[18px]'>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                         <h2 className=' font-extrabold text-[18px] mr-[5px] ml-[18px] mb-[10px] mt-10'>
                          Heading with a Subtitle
                         </h2>
                         <i className='ml-[22px] mt-1 text-[15px]'>
                            Lorem ipsum dolor sit amet nullam id egestas urna aliquam
                         </i>
                         <p className='mr-[10px] ml-[22px]  mb-[30px] mt-6 text-[15px]'>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
      
                                    </div>
                                     <hr className='w-[400px] ml-36'/>
      
                                      <h2 className=' font-extrabold text-[29px] mr-[10px] ml-[73px] mb-[30px] mt-10'>
                         LISTS
                         </h2>
      
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                         UNORDERED
                         </h2>
                         <ul className='mr-[10px] ml-[73px]  '>
                          <li type='disc' className="mb-2">
                              Dolor pulvinar etiam.
                          </li>
                          <li type='disc' className="mb-2">
                              Sagittis lorem eleifend.
                          </li>
                          <li type='disc' className="mb-2">
                              Felis feugiat dolore viverra.
                          </li>
                          <li type='disc' className="mb-2">
                              Dolor pulvinar etiam.
                          </li>
                         </ul>
                              </div>
                         <div>
                          <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                         ORDERED
                         </h2>
                         <ol className='mr-[10px] ml-[73px]  '>
                          <li type='' className="mb-2">
                              1. Dolor pulvinar etiam.
                          </li>
                          <li type='' className="mb-2 ">
                              2. Sagittis lorem eleifend.
                          </li>
                          <li type='' className="mb-2">
                              3. Felis feugiat dolore viverra.
                          </li>
                          <li type='' className="mb-2">
                              4. Dolor pulvinar etiam.
                          </li>
      
                         </ol>
                         </div>
                          </div>
                             <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                         Alternate
                         </h2>
                         <ul className='mr-[10px] ml-[73px]  '>
                          <li type='disc' className="mb-2">
                              Dolor pulvinar etiam.
                          </li>
                          <li type='disc' className="mb-2">
                              Sagittis lorem eleifend.
                          </li>
                          <li type='disc' className="mb-2">
                              Felis feugiat dolore viverra.
                          </li>
                          <li type='disc' className="mb-2">
                              Dolor pulvinar etiam.
                          </li>
                         </ul>
                              </div>
                         <div>
                          <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                        ICONS
                         </h2>
                         <div className='flex flex-row mr-[10px] ml-[73px]   '>
                          <a href='#' className='gap-3.5 ' >
                                              <i class="fa-brands fa-twitter" ></i>
                                              <i class="fa-brands fa-facebook"></i>
                                              <i class="fa-brands fa-instagram"></i>
                                              <i class="fa-brands fa-github"></i>
                                          </a>
                         </div>
                         <div className='flex flex-row mr-[10px] ml-[73px]  '>
                          <a href='#' className='gap-3.5 border border-gray-300 p-2 m-1 ' >
                                              <i class="fa-brands fa-twitter"  ></i>
                                              <i class="fa-brands fa-facebook"></i>
                                              <i class="fa-brands fa-instagram"></i>
                                              <i class="fa-brands fa-github"></i>
                                          </a>
                         </div>
                        
                         </div>
                          </div>
                           <div>
                               <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                         Definition
                         </h2>
                         <div className=' font-bold text-[16px] mr-[10px] ml-[73px] mb-[15px] mt-10'>
                        Item 1 
                         </div>
                          <p className='mr-[10px] ml-[70px]  mb-[30px] mt-6'>
                              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                          </p>
                           <div className=' font-bold text-[16px] mr-[20px] ml-[73px] mb-[15px] mt-10'>
                        Item 2 
                         </div>
                          <p className='mr-[10px] ml-[70px]  mb-[30px] mt-6'>
                              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                          </p>
                           <div className=' font-bold text-[16px] mr-[20px] ml-[73px] mb-[15px] mt-10'>
                        Item 3 
                         </div>
                          <p className='mr-[0px] ml-[70px]  mb-[30px] mt-6'>
                              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                          </p>
      
      
                           </div>
                           <h2 className=' font-extrabold text-[20px] mr-[10px] ml-[73px]  mt-10'>
                         BUTTONS
                         </h2>
                        <div className='flex flex-row'>
                           <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] bg-black text-white hover:bg-[#18bfef] h-[60px] '>
                          PRIMARY
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] border-2 font-bold text-black hover:border-[#18bfef] hover:text-[#18bfef]  h-[60px] '>
                         DEFAULT
                         </button>
      
                        </div>
                        <div className='flex flex-row'>
                           <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] bg-black text-white hover:bg-[#18bfef] '>
                         LARGE
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[12px] w-[150px] border-2 font-bold text-black hover:border-[#18bfef] hover:text-[#18bfef] h-[49px]'>
                         DEFAULT
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[10px] w-[100px] border-2 font-bold text-black  h-[40px] hover:border-[#18bfef] hover:text-[#18bfef] '>
                         SMALL
                         </button>
      
                        </div>
                        <div className='flex flex-row'>
                           <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[290px] bg-black text-white hover:bg-[#18bfef] h-[60px] '>
                          FIT
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[290px] border-2 font-bold text-black hover:border-[#18bfef] hover:text-[#18bfef]  h-[60px] '>
                         FIT
                         </button>
      
                        </div>
                        <div className='flex flex-row'>
                           <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[100px] bg-black text-white hover:bg-[#18bfef] h-[60px] '>
                          <i class="fa-solid fa-magnifying-glass"></i> ICON
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[100px] border-2 font-bold text-black hover:border-[#18bfef] hover:text-[#18bfef]  h-[60px] '>
                         <i class="fa-solid fa-cloud-arrow-down"></i>ICON
                         </button>
      
                        </div>
                         <div className='flex flex-row'>
                           <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] text-white bg-black opacity-15 h-[60px] '>
                          FIT
                         </button>
                          <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[140px] border-2 font-bold  opacity-15 h-[60px]'>
                         FIT
                         </button>
      
                        </div>
      
                      </div>
                      <div className='ml-2.5 mr-2.5 '>
                      <div className='foot '>
                          
      
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
                              
      
                          </div>
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
