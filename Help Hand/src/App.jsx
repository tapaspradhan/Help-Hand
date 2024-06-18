import { useState } from 'react'
import { FcOk,FcAlarmClock,FcLike,FcPlus } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import './App.css'
import twoDoctor from "../src/assets/images/twoDoctor.png"
import medicalBoy from "../src/assets/images/medicalBoy.png"
import doctorOnLaptop from "../src/assets/images/doctorOnLaptop.png"
import Navbar from './components/Navbar';

function App() {

  const [isOpen, setIsOpen]=useState(false)

  const toggleDropdown=()=>{
    setIsOpen(!isOpen)
  }
  const closeDropdown=()=>{
    setIsOpen(false)
  }

  const initiateCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  

  return (
    <>
    {/* flex justify-between items-center flex-wrap bg-navColor py-2 px-5 text-white font-bold w-full */}
      <nav className='w-full h-14 bg-navColor text-white font-bold flex justify-between px-5 py-10 md:px-6 items-center fixed top-0'>
          {/* <img src="" alt="Logo" srcset="" /> */}

            <h6 className='cursor-pointer'>HELP HAND</h6>

            <ul className=' justify-around items-center gap-5  mx-2 md:flex hidden' id='links'>

              <a href="" className='hover:bg-buttomHover px-2 py-1 rounded-3xl'><li className='mx-[10px]'>Home</li></a>
              <a href="#about" className='hover:bg-buttomHover px-2 py-1 rounded-3xl'><li className='mx-[10px]'>About</li></a>
              <a href="#contactUs" className='hover:bg-buttomHover px-2 py-1 rounded-3xl'><li className='mx-[10px]'>Contact Us</li></a>

              <details className="dropdown ">
                <summary className=" text-white font-bold hover:bg-buttomHover px-2 py-1 rounded-3xl cursor-pointer">Services</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1]  w-52">
                  <li><a className='hover:bg-buttomHover'>Doctor Home Visit</a></li>
                  <li><a className='hover:bg-buttomHover'>Doctor near me</a></li>
                  <li><a className='hover:bg-buttomHover'>Doctor for feaver tratment</a></li>
                </ul>
              </details>

            </ul>

            <button onClick={initiateCall} className='bg-buttonBg px-5 py-2 hover:bg-buttomHover border outline outline-1 rounded-3xl md:flex hidden'>Call:1234567890</button>
          <div  className=' md:hidden'>
            <a  className='text-5xl active:' href="#">&#8801;</a>
            
          </div>

          {/* Close Navbar */}
          <div className='md:hidden fixed inset-0 bg-slate-500'>
            <h6 className='cursor-pointer'>HELP HAND</h6>
            <a  className='text-5xl active:' href="#"><IoClose /></a>
          </div>
        
      </nav>
      {/* <Navbar/> */}
      {/* Experienced doctor at home */}
      <section>
        {/* <br /> */}
        <div className=" mx-auto bg-navColor shadow-md overflow-hidden md:max-w-full">
          <div className="md:flex">
          <div className="p-8">
              <div className=" tracking-wide text-2xl text-white font-bold mb-4 text-left mx-10">Experienced doctor at home</div>
              <h1 href="#" className="block mt-1 leading-tight text-5xl font-bold text-white mb-4 text-left mx-10">IN 60 MINUTES</h1>
              <p className="mt-2 text-white text-left mx-10 ">Get a home visit by our experienced & dedicated General Physicians
              who are available 24X7. Help Hand brings you the reliability of a 'family doctor'
              along with a wide range of at-home medical services.</p>
              
              <button onClick={initiateCall} className='bg-buttonBg text-white px-5 py-2 mt-5 hover:bg-buttomHover font-bold border outline outline-1 rounded-3xl max-md:w-full flex justify-center ml-8'>Call:1234567890</button>

            </div>
            
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={doctorOnLaptop} alt="Modern building architecture"/>
            </div>
            
          </div>
        </div>

        <br />

        {/* no */}
        {/* <div className='flex justify-around items-center bg-navColor md:min-w-2xl flex-wrap'>
          <div className='mx-40 text-left'>
            <h3 className='text-2xl text-white font-bold mb-4'>Experienced doctor at home</h3>
            <h1 className='text-5xl font-bold text-white mb-4'>IN 60 MINUTES</h1>
            <p className='text-white'>
              Get a home visit by our experienced & dedicated General Physicians
              who are available 24X7. Help Hand brings you the reliability of a 'family doctor'
              along with a wide range of at-home medical services.
            </p>
            <button onClick={toggleDropdown} className='bg-buttonBg text-white px-5 py-2 mt-5 hover:bg-buttomHover font-bold border outline outline-1 rounded-3xl :w-full'>Call:1234567890</button>
          </div>
          <div className='w-[480px]'>
            <img className='' src={doctorOnLaptop} alt="" />
          </div>
        </div> */}
      </section>
      {/* Why Help Hand? */}
      <section>
        <div className=''>
          <h2 className='font-bold text-3xl my-3 text-left '>Why Help Hand?</h2>
        </div>
        <div className='flex justify-around gap-y-3 flex-wrap h-auto'>
          <div className='shadow-2xl border border-navColor rounded-xl hover px-5 h-auto flex flex-col justify-center gap-8 items-center w-64'>
            <p className='text-8xl shadow-2xl rounded-full sm:[text-xl]'><FcOk/></p>
            <h6 className='text-2xl font-bold'>Excellence Assured</h6>
            <p className='font-semibold mb-5'>Expert doctors with proven experience, best quality medical supplies</p>
          </div>
          <div className='shadow-2xl border border-navColor rounded-xl hover px-5 h-auto flex flex-col justify-center gap-8 items-center w-64'>
            <p className='text-8xl shadow-2xl rounded-full'><FcAlarmClock /></p>
            <h6 className='text-2xl font-bold'>Excellence Assured</h6>
            <p className='font-semibold mb-5'>Expert doctors with proven experience, best quality medical supplies</p>
          </div>
          <div className='shadow-2xl border border-navColor rounded-xl hover px-5 h-auto flex flex-col justify-center gap-8 items-center w-64'>
            <p className='text-8xl shadow-2xl rounded-full'><FcLike /></p>
            <h6 className='text-2xl font-bold'>Excellence Assured</h6>
            <p className='font-semibold mb-5'>Expert doctors with proven experience, best quality medical supplies</p>
          </div>
          <div className='shadow-2xl border border-navColor rounded-xl hover px-5 h-auto flex flex-col justify-center gap-8 items-center w-64'>
            <p className='text-8xl shadow-2xl rounded-full'><FcPlus/></p>
            <h6 className='text-2xl font-bold'>Excellence Assured</h6>
            <p className='font-semibold mb-5'>Expert doctors with proven experience, best quality medical supplies</p>
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section>
        <h1 className='text-3xl font-bold text-left my-5' id='contactUs'>Contact Us</h1> 
        <div className='md:flex justify-around items-center bg-navColor pt-5 pb-3'>
          <div>
            <h1 className='text-white text-3xl font-bold'>Book Doctor <span className='text-buttonBg'>Appoitment</span></h1>
          </div>
          <form action="" className='gap-2 m-5'>
              <label className="input input-bordered flex items-center gap-2 mb-2">
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="email" className="grow" placeholder="Email (Optional)" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input type="number" className="grow" placeholder="Mobile Number" />
            </label>
          </form>
        </div>
      </section>

      {/* About */}
      <br/>

      <section>
          <div className='' id='about'>
            <h1 className="text-3xl font-bold text-left mt-5" >About</h1>
          </div>

        {/* <div className=" mx-auto bg-navColor shadow-md overflow-hidden md:max-w-full"> */}
        <div className="md:flex mx-auto  overflow-hidden md:max-w-full justify-center">
            <div className="p-8">

              <div className=" tracking-wide text-3xl text-white font-bold mb-4 text-left mx-10">WHO WE ARE</div>

                <p className="mt-2 text-left mx-20 ">At Help Hand, we are driven by the zeal to put ‘kindness’ & ‘care’ back into modern medical services. Our mission is to make the best medical support accessible to society at large without burning a hole in their pocket.</p>

            </div>

            <div className=" md:flex justify-center items-center mx-20">

              <img className="w-[360px] object-cover bg-slate-500 rounded-3xl mx-15" src={medicalBoy} alt="Mediacal Boy"/>

            </div>
              
            
        </div>
        {/* </div> */}

        {/* {no} */}
        <br />
        {/* <div>
          <div className='' id='about'>
            <h1 className="text-3xl font-bold text-left mt-5" >About</h1>
          </div>

          <div className='flex justify-around items-center mx-20'>

            <div className='mx-20 text-left'>
              <h1 className='text-3xl font-bold'>WHO WE ARE</h1>
              <p>At Help Hand, we are driven by the zeal to put ‘kindness’
                & ‘care’ back into modern medical services. Our mission is
                to make the best medical support accessible to society
                at large without burning a hole in their pocket.
              </p>
            </div>

            <div>
              <img src={medicalBoy} alt="Mediacal Boy" className='w-[860px] bg-slate-500 rounded-3xl'/>
            </div>

          </div>
        </div> */}
      </section>

      {/* FAQ */}

      <section>
        <div className='my-5'>
          <div className='my-5'>
          <h1 className='text-3xl font-bold text-left'>FAQ</h1>
          </div>
          <div>
            <div className=' justify-around md:flex items-center text-left gap-5'>
                <div>
                  <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                  </div>

                  <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                  </div>

                  <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                  </div>
                
              </div>
              <div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 my-2 ">
                    <div className="collapse-title text-xl font-medium">
                      Who are the doctors providing the medical services?
                    </div>
                    <div className="collapse-content"> 
                      <p>Our team consists of highly-qualified General Physicians with a wide range of experience in top medical institutions. Meet Our Team</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        {/* <footer className="footer p-10 bg-base-300 text-base-content"> */}
        <footer className="md:flex justify-between items-center footer p-10 bg-black text-white">
          <nav>
            <h6 className="footer-title">Services</h6> 
            <a className="link link-hover">On-Call Doctor</a>
            <a className="link link-hover">24*7 Doctor</a>
            <a className="link link-hover">Doctor near me</a>
            <a className="link link-hover">Doctor home visit</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of use</a>
          </nav> 
          <nav>
            <h6 className="footer-title">Social</h6> 
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </nav>
        </footer>
      </section>

      {/* Footer 2 */}
      <section>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by <a href="#">helphand.com</a></p>
          </aside>
        </footer>
      </section>

      {/*  */}
      <section>
        <div className='relative  md:hidden flex justify-center items-center'>
          <h1 onClick={initiateCall} className='fixed bg-buttonBg text-white py-1 w-full bottom-0 text-3xl'>Call Us</h1>
        </div>
      </section>

    </>
  )
}

export default App
