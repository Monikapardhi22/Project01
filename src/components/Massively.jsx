import React,{useState,useEffect} from 'react'
import pic1 from '../assets/pic01.jpg'
import pic2 from '../assets/pic02.jpg'
import pic3 from '../assets/pic03.jpg'
import pic4 from '../assets/pic04.jpg'
import pic5 from '../assets/pic05.jpg'
// import bg from '../assets/bg.jpg'


import './Massively.css'



export default function Massively({selectedView }) {
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
   const getViewClass = () => {
    switch (selectedView) {
      case "desktop":
        return "w-[100%]"; // full screen
      case "tablet":
        return "w-[768px]"; // tablet landscape
      case "tablet-portrait":
        return "w-[600px]"; // tablet portrait
      case "mobile":
        return "w-[375px]"; // mobile size
      default:
        return "w-full";
    }
  };
    return (
        <div className={`mx-auto border p-6 ${getViewClass()} overflow-hidden s="h-screen bg-[url('../assets/bg.jpg')] bg-cover bg-no-repeat bg-fixed text-white m-0 p-0`}>

            <div className='header '>



                <div className={`scroll ${hide ? "hide" : ""}`}>
                    
                    <h1 >
                        THIS IS MASSIVELY
                    </h1>
                    <p>
                        <i className='italic'>
                            A free,fully responsive HTML5 + CSS3 site template designed by <a href='https://twitter.com/ajlkn'> @ajlkn</a>
                            <br /> for <a href='https://html5up.net'>HTML5</a> UP and released for free under the <a href='https://html5up.net/license'>Creative Commons license</a>
                        </i>
                    </p>
                </div>
                    <ul className={`massively-scroll ${hide ? "show" : ""}`}>
                        <li>
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
            <div className=' m-8 mb-20'>

                <ul className='flex justify-around items-center text-lg font-bold text-white/40 '>

                    <li>© Untitled    </li>

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
