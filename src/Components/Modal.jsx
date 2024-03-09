// import React, { useState } from 'react';
// import './Modal.css'; // Import your CSS file for modal styles
// import pen from '../assets/pen.png'
// import inquiry from '../assets/inquiry.png'

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       {isOpen && (
//         <div className="modals">

//           <form className="modal-content">

//             <h1>We Would Love To Know Your Thoughts!</h1>

//              <div className='penbox'>
//                     <img src={pen} alt="" />
//                     <h5>Write Your Inquiry On The Box Below</h5>
//              </div>

//             <textarea id="w3review" name="w3review" rows="9" cols="50">
//                         HELLO GOODMORNINGS
//             </textarea>

//             <div className='infosend'>
//                 <h6>Email Address/Mobile No.</h6>
//                 <input type="text" id="E-mail" name="email" />
//                 <button><img src={inquiry} alt="" />Send</button>
//             </div>


    

//            <h3>Important:All information given will be treated with the highest confidentially.It will solely be used for Vcash purposes only.</h3>

//                 <button className="close" onClick={closeModal}>back to home</button>

             
            
//           </form>
        
//         </div>
        
//       )}
//     </div>
//   );
// };

// export default Modal;