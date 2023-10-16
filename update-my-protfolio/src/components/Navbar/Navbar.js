// import React, { useState } from "react"
// import './Navbar.css';
// import logo from './logo2.jpg';
// import {FaTimes , FaBars} from 'react-icons/fa'
// import { Link } from "react-router-dom";

// const Header = () => {
//   // fixed Header
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header")
//     header.classList.toggle("active", window.scrollY > 100)
//   })
//   // Toogle Menu
//   const [Mobile, setMobile] = useState(false)
//   return (
//     <>
//       <header className='header'>
//         <div className='container d_flex'>
//           <div className='logo'>
//             <img src={logo} alt='' />
             
//           </div>

//           <div className='navlink'>
//             <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
//               <li>
//                 <Link  to="/">Home</Link>
                
//               </li>
//               <li>
//                  <Link to="/about">About</Link>
                
//               </li>
//               <li>
//                 <Link to='/skills'>Skills</Link>
                
//               </li>
//               <li>
//                 <Link to="/portfolio">Portfolio</Link>
//               </li>
            
//               <li>
              
//                 <Link to="/testimonial">Testimonial</Link>
                
//               </li>
              
//               <li>
                
//                 <Link to="/contact">Contact</Link>
//               </li>
              
//               <li>
//                 <button className='home-btn'>BUY NOW</button>
//               </li>
//             </ul>

//             <button className='toggle' onClick={() => setMobile(!Mobile)}>
//              { Mobile ? <FaTimes className="close home-btn"></FaTimes> : <FaBars className="open"></FaBars>}
             
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header












import React, { useState } from "react"
import './Navbar.css';
import logo from './logo2.jpg';
import {FaTimes , FaBars} from 'react-icons/fa'
import { NavLink } from "react-router-dom"; 
// import { Link } from "react-router-dom";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

  const NavLinkStyles = ({isActive}) => {
          return {
             fontWeight: isActive ? 'bold' : 'normal',
             textDecoration: isActive ? 'none' : 'underline' ,   
          }
  }
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
             
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
             
              <li>
                <NavLink style={NavLinkStyles}  to="/">Home</NavLink>
                
              </li>
              <li>
                 <NavLink style={NavLinkStyles} to="/about">About</NavLink>
                
              </li>
              <li>
                <NavLink style={NavLinkStyles} to='/skills'>Skills</NavLink>
                
              </li>
              <li>
                <NavLink style={NavLinkStyles} to="/portfolio">Portfolio</NavLink>
              </li>
            
              <li>
              
                <NavLink style={NavLinkStyles} to="/testimonial">Testimonial</NavLink>
                
              </li>
              
              <li>
                
                <NavLink style={NavLinkStyles} to="/contact">Contact</NavLink>
              </li>
              
              <li>
                <button className='home-btn'>BUY NOW</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
             { Mobile ? <FaTimes className="close home-btn"></FaTimes> : <FaBars className="open"></FaBars>}
             
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header












