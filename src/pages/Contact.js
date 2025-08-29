
import React, { useState } from 'react';
import Navvbar from '../components/navvbar';
import Footer from '../components/footer/footer';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe2889a2-27f7-40d0-a279-a054b5b1030b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setResult("Network error. Please try again.");
    }
  };

  return (
    <>
      <Navvbar />
      <div className="min-h-screen p-2 flex flex-col justify-start bg-gradient-to-r from-blue-500 to-teal-500 bg-opacity-90 backdrop-blur-lg">
        {/* Upper Section Form */}
        <div className="flex-grow flex justify-center items-start py-12">
          <form
            onSubmit={onSubmit}
            className="block px-6 py-8 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg animate__animated animate__fadeIn animate__delay-1s"
          >
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Contact Us</h2>
            
            {/* Name Input */}
            <label className='text-gray-800' htmlFor="name">Enter your name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              aria-label="Name"
            />

            {/* Email Input */}
            <label className='text-gray-800' htmlFor="email">Enter your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              aria-label="Email"
            />

            {/* Message Textarea */}
            <label className='text-gray-800' htmlFor="message">Enter your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              aria-label="Message"
            />

          
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Submit Form
            </button>

            {/* Result Message */}
            <span className="text-center block text-gray-900 mt-2">{result}</span>
          </form>
        </div>

   
        <div className="flex justify-center items-center animate__animated animate__zoomIn animate__delay-2s py-12">
          <img
            src="/pic/contact.jpg"
            alt="Contact Us"
            className="w-full max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
        <Footer/>
      </div>
    </>
  );
}
// import React, { useState } from 'react';
// import Navvbar from '../components/navvbar';

// export default function Contact() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "fe2889a2-27f7-40d0-a279-a054b5b1030b");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Message sent successfully!");
//         event.target.reset();
//       } else {
//         console.error("Error", data);
//         setResult(data.message || "Something went wrong.");
//       }
//     } catch (err) {
//       console.error(err);
//       setResult("Network error. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navvbar />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 bg-opacity-90 backdrop-blur-lg">
//         {/* Main Content Container */}
//         <div className="flex w-full max-w-screen-xl justify-between p-10">
//           {/* Form Section */}
//           <form
//             onSubmit={onSubmit}
//             className="bg-white rounded-lg shadow-md space-y-6 p-8 w-full max-w-md animate__animated animate__fadeIn animate__delay-1s"
//           >
//             <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Contact Us</h2>

//             {/* Name Input */}
//             <label className='text-gray-800' htmlFor="name">Enter your name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               required
//               className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               aria-label="Name"
//             />

//             {/* Email Input */}
//             <label className='text-gray-800' htmlFor="email">Enter your Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               aria-label="Email"
//             />

//             {/* Message Textarea */}
//             <label className='text-gray-800' htmlFor="message">Enter your Message</label>
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Message"
//               required
//               className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               aria-label="Message"
//             />

//             {/* Submit Button with Hover Animation */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
//             >
//               Submit Form
//             </button>

//             {/* Result Message */}
//             <span className="text-center block text-gray-900 mt-2">{result}</span>
//           </form>

//           {/* Image Section */}
//           <div className="w-full max-w-sm flex justify-center items-center animate__animated animate__zoomIn animate__delay-2s">
//             <img
//               src="/pic/bbd.png"
//               alt="Contact Us"
//               className="w-full h-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
