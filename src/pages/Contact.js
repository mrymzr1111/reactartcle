
// export default function Contact() {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "fe2889a2-27f7-40d0-a279-a054b5b1030b");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="text" name="name" required/>
//         <input type="email" name="email" required/>
//         <textarea name="message" required></textarea>

//         <button type="submit">Submit Form</button>

//       </form>
//       <span>{result}</span>

//     </div>
//   );
// }

import React, { useState } from 'react';
import Navvbar from '../components/navvbar';

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
        setResult("Message sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
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
      <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-90">
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md">
          <input type="text" name="name" placeholder="Name" required className="w-full border rounded p-2" />
          <input type="email" name="email" placeholder="Email" required className="w-full border rounded p-2" />
          <textarea name="message" rows="4" placeholder="Message" required className="w-full border rounded p-2"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit Form</button>
          <span className="text-center block text-gray-700 mt-2">{result}</span>
        </form>
      </div>
    </>
  );
}
