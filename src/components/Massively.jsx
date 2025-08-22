import React, { useState, useEffect } from 'react'
import pic1 from '../assets/pic01.jpg'
import pic2 from '../assets/pic02.jpg'
import pic3 from '../assets/pic03.jpg'
import pic4 from '../assets/pic04.jpg'
import pic5 from '../assets/pic05.jpg'
// import bg from '../assets/bg.jpg'


import './Massively.css'




export default function Massively({ selectedView, setSelectedView }) {
    const [hide, setHide] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
 
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
    const getViewClass = () => {
        switch (selectedView) {
            case "desktop":
                return "w-[100%]  "; // full screen
            case "tablet":
                return "w-[768px]  "; // tablet landscape
            case "tablet-portrait":
                return "w-[600px] "; // tablet portrait
            case "mobile":
                return "w-[375px]  "; // mobile size
            default:
                return "w-full";
        }
    };
    return (
        <div >
            <div className={`mx-auto border p-6 ${getViewClass()} overflow-hidden s="h-screen bg-[url('/src/assets/bg.jpg')] bg-cover bg-no-repeat bg-fixed text-white m-0 p-0`}>
                <button
                    className="text-white md:hidden float-right flex font-bold justify-center items-center "
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>MENU
                </button>
                <div className='header '>



                    <div className={`scroll ${hide ? "hide" : ""}`}>

                        <h1 className=''>
                            THIS IS MASSIVELY
                        </h1>
                        <p>
                            <i className='italic'>
                                A free,fully responsive HTML5 + CSS3 site template designed by <a href='https://twitter.com/ajlkn'> @ajlkn</a>
                                <br /> for <a href='https://html5up.net'>HTML5</a> UP and released for free under the <a href='https://html5up.net/license'>Creative Commons license</a>
                            </i>
                        </p>
                    </div>
                    <ul className={`massively-scroll ${hide ? "show" : ""}`} >
                        <li className='hover:text-sky-400'>
                            <a href='#header'  >
                                MASSIVELY
                            </a>
                        </li>
                    </ul>


                </div>
                <div className='page flex flex-row  items-center overflow-hidden'>
                    <div className='   text-white font-bold  flex-row  flex '>
                        <h4 onClick={() => setSelectedView('Massively')}>THIS IS MASSIVELY</h4>
                        <h4 onClick={() => setSelectedView('generic')} >GENERIC PAGE</h4>
                        <h4 onClick={() => setSelectedView('elements')}>ELEMENTS REFERENCE</h4>

                    </div>
                    <a href='#' className='gap-3.5 flex flex-row text-white ml-56' >
                        <i class="fa-brands fa-twitter" onClick={() => setSelectedView('tweet')} ></i>
                        <i class="fa-brands fa-facebook" onClick={()=>setSelectedView('face')}></i>
                        <i class="fa-brands fa-instagram" onClick={()=>setSelectedView('insta')}></i>
                        <i class="fa-brands fa-github" onClick={()=>setSelectedView('github')}></i>
                    </a>
                </div>

                <nav className='nav overflow-hidden' >

                    <div>
                        <span id='date'>
                            April 25,2017
                        </span>

                        <h2>
                            <a href='#' id='and' > AND THIS IS A MASSIVE HEADLINE</a>
                        </h2>
                        <p className='para'>
                            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
                            <br />
                            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
                            amet nullam sed etiam veroeros.
                        </p>

                    </div>

                    <a href='#' className='image main'>
                        <img src={pic1} alt='pic01' />
                    </a>
                    <ul>
                        <li>
                            <a href='#' className='story-btn'>Full Story</a>
                        </li>
                    </ul>
                    <hr className='border-2 w-full' />
                    <div className='box'>
                        <div >

                            <span id='date'>
                                April 24,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >SED MAGNA <br>
                                </br>
                                    IPSUM FAUCIBUS</a>
                            </h2>

                            <a href='#' className='image main'>
                                <img src={pic2} alt='pic02' />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'>Full Story</a>
                                </li>
                            </ul>



                        </div>
                        {/* <hr className='border-2 w-full' /> */}

                        <div>
                            <span id='date'>
                                April 22,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >PRIMIS EGET <br>
                                </br>
                                    IMPERDIET LOREM</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic3} alt='pic03' />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'>Full Story</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr className='border-2 w-full' />
                    <div className='box'>
                        <div>
                            <span id='date'>
                                April 18,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >ANTE AMTTIS <br>
                                </br>
                                    INTERDUM DOLOR</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic4} alt='pic04' />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'>Full Story</a>
                                </li>
                            </ul>


                        </div>
                        {/* <hr className='border-2 w-full' /> */}
                        <div>
                            <span id='date'>
                                April 14,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >TEMPUS SED <br>
                                </br>
                                    NULLA IMPERDIET</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic5} alt='pic05' />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'>Full Story</a>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <hr className='border-2 w-full' />




                    <hr className=' border-2 w-full mb-2.5' />

                    <div>

                        <div className='page-next '>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>1</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>2</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>3</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>...</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>8</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>9</a>
                            <a href="#" className='border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>10</a>
                            <a href="# " className='next border-4 border-amber-100 border-solid p-4 hover:bg-yellow-50'>NEXT  </a>
                        </div>
                    </div>


                    {/* form */}

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

                {/* GENERIC  */}


                <div className='header overflow-hidden '>




                    <ul className={`massively-scroll ${hide ? "show" : ""}`}>
                        <li className='hover:text-sky-400'>
                            <a href='#header'  >
                                MASSIVELY
                            </a>
                        </li>
                    </ul>


                </div>
                <nav className='nav' >

                    <div>
                        <span id='date'>
                            April 25,2017
                        </span>

                        <h2>
                            <a href='#' id='and' > THIS IS A GENERIC <br />PAGE</a>
                        </h2>
                        <p className='para'>
                            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
                            <br />
                            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
                            amet nullam sed etiam veroeros.
                        </p>

                    </div>

                    <a href='#' className='image main'>
                        <img src={pic1} alt='pic01' />
                    </a>
                    <p className='m-[26px] text-[18px] font-light ' style={{ wordSpacing: '6px' }}>

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

                {/* ELEMENTS */}

                <div className='header '>




                    <ul className={`massively-scroll ${hide ? "show" : ""}`}>
                        <li className='hover:text-sky-400'>
                            <a href='#header'  >
                                MASSIVELY
                            </a>
                        </li>
                    </ul>


                </div>

                <div className='bg-white mr-[10px] ml-[10px] text-black flex flex-col  mt-[30px]  mb-[30px] overflow-hidden' >
                    <div className=''>
                        <a href='#' id='and' > ELEMENTS <br />REFERENCE</a>
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
                     <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] bg-black text-white hover:bg-sky-400 h-[60px] '>
                    PRIMARY
                   </button>
                    <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] border-2 font-bold text-black hover:border-sky-400 hover:text-sky-400  h-[60px] '>
                   DEFAULT
                   </button>

                  </div>
                  <div className='flex flex-row'>
                     <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[150px] bg-black text-white hover:bg-sky-400 '>
                   LARGE
                   </button>
                    <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[12px] w-[150px] border-2 font-bold text-black hover:border-sky-400 hover:text-sky-400  h-[49px]'>
                   DEFAULT
                   </button>
                    <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[10px] w-[100px] border-2 font-bold text-black  h-[40px] hover:border-sky-400 hover:text-sky-400 '>
                   SMALL
                   </button>

                  </div>
                  <div className='flex flex-row'>
                     <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[290px] bg-black text-white hover:bg-sky-400 h-[60px] '>
                    FIT
                   </button>
                    <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[290px] border-2 font-bold text-black hover:border-sky-400 hover:text-sky-400  h-[60px] '>
                   FIT
                   </button>

                  </div>
                  <div className='flex flex-row'>
                     <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[100px] bg-black text-white hover:bg-sky-400 h-[60px] '>
                    <i class="fa-solid fa-magnifying-glass"></i> ICON
                   </button>
                    <button className='mr-[10px] ml-[73px] mb-[15px] mt-10 p-[15px] w-[100px] border-2 font-bold text-black hover:border-sky-400 hover:text-sky-400  h-[60px] '>
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







                {/* Dropdown  */}

                {menuOpen && (
                    <div className="absolute top-[58px] left-8/12 w-[300px] h-full bg-white text-black font-semibold flex flex-col md:hidden ">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-left p-3 bg-gray-200 hover:bg-gray-300 text-black font-bold"
                        >
                            ← Back
                        </button>
                        <a href="/" className="p-2 pt-14  pb-5 text-[13.5px] pl-6 hover:text-sky-400" onClick={() => { setSelectedView('massively'); setMenuOpen(false); }}>THIS IS MASSIVELY</a>
                        <hr />
                        <a href="/" className="p-2 pt-14 pb-5 text-[13.5px] pl-6  hover:text-sky-400" onClick={() =>  { setSelectedView('generic'); setMenuOpen(false); }}>GENERIC PAGE</a>
                        <hr />
                        <a href="/" className="p-2 pt-14 pb-5 text-[13.5px] pl-6  hover:text-sky-400 " onClick={() => setSelectedView('elements')}>ELEMENTS REFERENCE</a>
                        <hr />
                        <div className="flex gap-4 p-3 justify-center  mt-2  mr-[80px]  ">
                            <a href="#" className=' hover:text-sky-400 hover:border-sky-400 border-[3px] border-gray-500  p-1 rounded-[50%]'><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className=' hover:text-sky-400 hover:border-sky-400 border-[3px] border-gray-500  p-1 rounded-[50%]'><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className=' hover:text-sky-400 hover:border-sky-400 border-[3px] border-gray-500  p-1 rounded-[50%]'><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className=' hover:text-sky-400 hover:border-sky-400 border-[3px] border-gray-500  p-1 rounded-[50%]'><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                )}


            </div>

        </div>
    )
}
