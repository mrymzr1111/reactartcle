
// import React from 'react';
// import styled from './contact.module.css';
// import Navvbar from '../components/navvbar';


// const Contact = () => {

//  const onSubmit = async (event) => {

//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "fe2889a2-27f7-40d0-a279-a054b5b1030b");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);

//     }
//   };



//     return (
//       <form onSubmit={onSubmit}>
//          <Navvbar title="Maryam Blog"/>
//         <div className='container'>
           
//             <div className={styled.contactWrapper}>
//                 <h1>Contact Us</h1>
//                 <p>If you have any questions or feedback, feel free to reach out to us!</p>
//                 <form className={styled.contactForm}>
//                     <div className={styled.formGroup}>
//                         <label htmlFor="name">Your Name</label>
//                         <input type="text" id="name" name='name' placeholder="Enter your name" required />
//                     </div>

//                     <div className={styled.formGroup}>
//                         <label htmlFor="email">Your Email</label>
//                         <input type="email" id="email" name='email' placeholder="Enter your email" required />
//                     </div>

//                     <div className={styled.formGroup}>
//                         <label htmlFor="message">Message</label>
//                         <textarea id="message" name='message' placeholder="Write your message here" required></textarea>
//                     </div>

//                     <button type="submit" className={styled.submitButton}>Send Message</button>
//                 </form>
//             </div>
//         </div>
//         </form>
//     );
// };

// export default Contact;
import React from 'react';
import styled from './contact.module.css';
import Navvbar from '../components/navvbar';
import { toast, ToastContainer } from 'react-toastify'; // Correct Import
import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS is loaded

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "fe2889a2-27f7-40d0-a279-a054b5b1030b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                // Use toast with a string position
                toast.success('Your message has been sent successfully!', {
                    position: 'top-right', // Direct string for position
                    autoClose: 5000,
                });
            } else {
                toast.error('Something went wrong. Please try again later.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
            }
        } catch (error) {
            toast.error('Network Error. Please try again later.', {
                position: 'top-right',
                autoClose: 5000,
            });
            console.error("Error sending form data:", error);
        }
    };

    return (
        <>
            <Navvbar title="Maryam Blog" />
            <div className='container'>
                <div className={styled.contactWrapper}>
                    <h1>Contact Us</h1>
                    <p>If you have any questions or feedback, feel free to reach out to us!</p>

                    <form className={styled.contactForm} onSubmit={onSubmit}>
                        <div className={styled.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>

                        <div className={styled.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>

                        <div className={styled.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
                        </div>

                        <button type="submit" className={styled.submitButton}>Send Message</button>
                    </form>
                </div>
            </div>

            {/* Toastify Container for notifications */}
            <ToastContainer />
        </>
    );
};

export default Contact;
