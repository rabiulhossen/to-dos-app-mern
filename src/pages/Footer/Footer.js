import React from 'react'
import './Footer.css'

export default function Footer() {
     const today = new Date();
     const year = today.getFullYear();
  return (
     <footer className="text-center mt-5 footer-clean">
     <div className="container">
       <div className="row justify-content-center">
        
         <div className="col-sm-4 col-md-3 item">
           <h3>About</h3>
           <ul>
             <li>
               <a href="#">Company</a>
             </li>
             <li>
               <a href="#">Team</a>
             </li>
             <li>
               <a href="#">Legacy</a>
             </li>
           </ul>
         </div>
         <div className="col-sm-4 col-md-3 item">
           <h3>Careers</h3>
           <ul>
             <li>
               <a href="#">Job openings</a>
             </li>
             <li>
               <a href="#">Employee success</a>
             </li>
             <li>
               <a href="#">Benefits</a>
             </li>
           </ul>
         </div>
         <div className="col-lg-3 item social">
        
           <p className="mt-3 copyright ">
             copyright @ {year} 
           </p>
         </div>
       </div>
     </div>
   </footer>
  )
}
