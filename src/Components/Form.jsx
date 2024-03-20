// import React, { useState } from 'react';
// import axios from 'axios';


// function Form() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           await axios.post('/send-inquiry', formData);
//           alert('Inquiry sent successfully!');
//           setFormData({
//             name: '',
//             email: '',
//             message: ''
//           });
//         } catch (error) {
//           console.error('Error sending inquiry:', error);
//           alert('Failed to send inquiry. Please try again later.');
//         }
//       };
    
//       return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </label>
//           <label>
//             Email:
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           </label>
//           <label>
//             Message:
//             <textarea name="message" value={formData.message} onChange={handleChange} required />
//           </label>
//           <button type="submit">Submit Inquiry</button>
//         </form>
//       );
// }

// export default Form
