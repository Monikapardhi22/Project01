import React, { useState, useEffect } from 'react'
import pic1 from '../assets/pic01.jpg'
import pic2 from '../assets/pic02.jpg'
import pic3 from '../assets/pic03.jpg'
import pic4 from '../assets/pic04.jpg'
import pic5 from '../assets/pic05.jpg'



import './Massively.css'
import { Link } from 'react-router'
import ElementsContent from './ElementsContent'
import GenericContent from './GenericContent'





export default function Massively({ selectedView, setSelectedView }) {
    // const [hide, setHide] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 200) {
    //             setHide(true);
    //         } else {
    //             setHide(false);
    //         }
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    const getViewClass = () => {
        switch (selectedView) {
            case "desktop":
                return "w-[100%]  "; // full screen
            case "tablet":
                return "w-[768px] border-[19px]  "; // tablet landscape
            case "tablet-portrait":
                return "max-w-[600px] border-[19px]  rounded-md  mx-auto overflow-x-auto "; // tablet portrait
            case "mobile":
                return "w-full max-w-[375px] px-4 mx-auto border-[19px] overflow-x-auto "; // mobile size
            default:
                return "w-full";
        }
    };
    function MassivelyContent({ setSelectedView }) {
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
            <>
                <div className='header '>



                    <div className={`scroll ${hide ? "" : ""}`}>

                        <h1 className='mass'>
                            THIS IS MASSIVELY
                        </h1>
                        <p className='text-[16px] px-4 md:px-6 lg:px-12'>
                            <i className='free font-sans text-[18px] md:text-[21px] leading-relaxed block md:max-w-[550px] lg:max-w-[700px] md:ml-6 lg:ml-12' >
                                A free,fully responsive HTML5+CSS3 site template designed by <a href='https://twitter.com/ajlkn' >@ajlkn </a>
                                for <a href='https://html5up.net'>HTML5UP</a>  <br /> and released for free under the <a href='https://html5up.net/license'>Creative Commons license</a>
                            </i>
                        </p>
                    </div>
                </div>
                <div className='header overflow-hidden '>
                    <ul className={`massively-scroll ${hide ? "show" : ""}`} >
                        <li className='hover:text-[#18bfef] hover:border-[#18bfef] '>
                            <a href='#header'  >
                                MASSIVELY
                            </a>
                        </li>
                    </ul>
                </div>




                <div className='page flex flex-row md:flex-row items-center '>
                    <div className='   text-white font-bold  flex-row  flex '>
                        <h4 className="cursor-pointer" onClick={() => setSelectedView('massively')}>
                            THIS IS MASSIVELY</h4>
                        <h4 className="cursor-pointer" onClick={() => setSelectedView('generic')} >
                            <a href='#generic' >GENERIC PAGE</a> </h4>
                            <br/>
                        <h4 className="cursor-pointer" onClick={() => setSelectedView('elements')}>
                              <a href='#elements' >ELEMENTS REFERENCE</a></h4>

                    </div>
                    <a href='#' className='gap-3.5 flex flex-row text-white ml-56' >
                        <i class="fa-brands fa-twitter" onClick={() => setSelectedView('tweet')} ></i>
                        <i class="fa-brands fa-facebook" onClick={() => setSelectedView('face')}></i>
                        <i class="fa-brands fa-instagram" onClick={() => setSelectedView('insta')}></i>
                        <i class="fa-brands fa-github" onClick={() => setSelectedView('github')}></i>
                    </a>
                </div>

                <nav className='nav overflow-hidden' >

                    <div>
                        <span id='date'>
                            April 25,2017
                        </span>

                        <h2>
                            <a href='#' id='and-and' > AND THIS IS A MASSIVE HEADLINE</a>
                        </h2>
                        <p className=' m-4 text-center text-[4px] italic font-extralight'>
                            Aenean ornare velit lacus varius enim ullamcorper proin aliquam

                            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
                            amet nullam sed etiam veroeros.
                        </p>

                    </div>

                    <a href='#' className='image main'>
                        <img src={pic1} alt='pic01' className="w-full h-auto object-cover" />
                    </a>
                    <ul>
                        <li>
                            <a href='#' className='story-btn'>
                                <button className='w-full sm:w-[150px] md:w-[150px]'>Full Story</button></a>
                        </li>
                    </ul>
                    {/* <hr className='border-2 w-full' /> */}
                    <div className='box border-4 border-[rgb(168,168,154)]  p-5 '>
                        <div className='border-0 p-6 border-r-4 border-[rgb(168,168,154)]'>

                            <span id='date'>
                                April 24,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >SED MAGNA <br>
                                </br>
                                    IPSUM FAUCIBUS</a>
                            </h2>

                            <a href='#' className='image main'>
                                <img src={pic2} alt='pic02' className="w-full h-auto object-cover" />
                            </a>
                            <p className='para '>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'><button className='w-full sm:w-[150px] md:w-[150px]'>Full Story</button></a>
                                </li>
                            </ul>



                        </div>
                        {/* <hr className='border-2 w-full' /> */}

                        <div className='border-0 p-6'>
                            <span id='date'>
                                April 22,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >PRIMIS EGET <br>
                                </br>
                                    IMPERDIET LOREM</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic3} alt='pic03' className="w-full h-auto object-cover" />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'><button className='w-full sm:w-[150px] md:w-[150px]'>Full Story</button></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <hr className='border-2 w-full' />
                    <div className='box border-4 border-[rgb(168,168,154)]  pt-5 pb-5 flex justify-around items-center'>
                        <div className='border-0 p-6 border-r-4 border-[rgb(168,168,154)] '>
                            <span id='date'>
                                April 18,2017
                            </span>

                            <h2>
                                <a href='#' id='and' >ANTE AMTTIS <br>
                                </br>
                                    INTERDUM DOLOR</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic4} alt='pic04' className="w-full h-auto object-cover" />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'><button className='w-full sm:w-[150px] md:w-[150px]'>Full Story</button></a>
                                </li>
                            </ul>


                        </div>
                        {/* <hr className='border-2 w-full' /> */}
                        <div className='border-0 p-6'>
                            <span id='date'>

                                April 14,2017
                            </span>

                            <h2>
                                <a href='#' id='and' className='' >TEMPUS SED <br>
                                </br>
                                    NULLA IMPERDIET</a>
                            </h2>
                            <a href='#' className='image main'>
                                <img src={pic5} alt='pic05' className="w-full h-auto object-cover" />
                            </a>
                            <p className='para'>
                                Doneceget ex magna.Interdum et malesuada fames ac ante ipsun primis in faucibus .Pellentesque veneenatis dolor imperdiet dolor mattis sagittis magna etiam.
                            </p>
                            <ul>
                                <li className='text-center'>
                                    <a href='#' className='story-btn'><button className='w-full sm:w-[150px] md:w-[150px]'>Full Story</button></a>
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
            </>
        )
    }




    return (
        <div >
            <div className={`mx-auto border p-6 ${getViewClass()} overflow-x-auto h-screen bg-[url('/src/assets/bg.jpg')] bg-cover bg-no-repeat bg-fixed text-white m-0 p-0 min-h-screen overflow-y-auto `}>
                <button
                    className="text-white md:hidden float-right flex font-bold justify-center items-center "
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>MENU
                </button>




                <MassivelyContent/>

    <GenericContent />            
                <section 
     id='elements' className='h-screen '><ElementsContent/></section>

                

                {/* massievly */}
                {/* {selectedView === 'massively' && (
                    <MassivelyContent />

                )} */}

                {/* GENERIC  */}
                {selectedView === 'generic' && ( <section 
     id='generic' className='h-screen '><GenericContent /></section>
                )}


                {/* ELEMENTS */}
                {selectedView === 'elements' && (
                    <ElementsContent />

                )}






                {/* Dropdown  */}

                {menuOpen && (
                    <div className="absolute top-[58px] left-8/12 w-[300px] h-full bg-white text-black font-semibold flex flex-col md:hidden ">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-left p-3 bg-gray-200 hover:bg-gray-300 text-black font-bold"
                        >
                            ← Back
                        </button>
                        <a href="/" className="p-2 pt-14  pb-5 text-[13.5px] pl-6 hover:text-[#18bfef]" onClick={() => { setSelectedView('massively'); setMenuOpen(false); }}>THIS IS MASSIVELY</a>
                        <hr />
                        <a href="/" className="p-2 pt-14 pb-5 text-[13.5px] pl-6  hover:text-[#18bfef]" onClick={() => { setSelectedView('generic'); setMenuOpen(false); }}><Link to='/generic'>GENERIC PAGE</Link></a>
                        <hr />
                        <a href="/" className="p-2 pt-14 pb-5 text-[13.5px] pl-6  hover:text-[#18bfef] " onClick={() => setSelectedView('elements')}><Link to='/elements'>ELEMENTS REFERENCE</Link></a>
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
