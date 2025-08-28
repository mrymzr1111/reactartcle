
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-pink-100 text-gray-800 mt-24 shadow-lg">
//       {/* TOP */}
//       <div className="flex flex-col md:flex-row justify-between gap-24">
//         {/* LEFT */}
//         <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
//           <Link to="/">
//             <div className="text-2xl tracking-wide font-bold text-gray-900">Maryam Blog</div>
//           </Link>
//           <p className="text-gray-700">Cyprus, Nicosia</p>
//           <span className="font-semibold">
//             <a
//               href="https://www.ui.ac.ir/EN"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline text-gray-700"
//             >
//               https://www.uikniknknllk
//             </a>
//           </span>
//           <span className="font-semibold text-gray-700">Tel: 793 2039-40</span>
//           <div className="flex gap-6">
//             <img src="/facebook.png" alt="Facebook" width={20} height={20} />
//             <img src="/instagram.png" alt="Instagram" width={20} height={20} />
//             <img src="/youtube.png" alt="YouTube" width={20} height={20} />
//             <img src="/pinterest.png" alt="Pinterest" width={20} height={20} />
//             <img src="/x.png" alt="Twitter (X)" width={20} height={20} />
//           </div>
//         </div>

//         {/* CENTER */}
//         <div className="hidden lg:flex justify-between w-full lg:w-1/2 text-gray-700">
//           <div className="flex flex-col">
//             <h1 className="font-medium text-lg mb-2 text-gray-900">Company</h1>
//             <div className="flex flex-col gap-3">
//               <Link to="" className="hover:underline">About Us</Link>
//               <Link to="" className="hover:underline">Our Team</Link>
//               <Link to="" className="hover:underline">Collaborations</Link>
//               <Link to="" className="hover:underline">Blog</Link>
//               <Link to="" className="hover:underline">Contact Us</Link>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="font-medium text-lg mb-2 text-gray-900">Shop</h1>
//             <div className="flex flex-col gap-3">
//               <Link to="" className="hover:underline">New Articles</Link>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="font-medium text-lg mb-2 text-gray-900">Support</h1>
//             <div className="flex flex-col gap-3">
//               <Link to="" className="hover:underline">Customer Service</Link>
//               <Link to="" className="hover:underline">My Account</Link>
//               <Link to="" className="hover:underline">Privacy Policy</Link>
//               <Link to="" className="hover:underline">Gift Cards</Link>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6 text-gray-800">
//           <h1 className="font-medium text-lg text-gray-900">Subscribe</h1>
//           <p>Be the first to get the latest news articles.</p>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="Email address"
//               className="p-3 w-3/4 border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-l"
//             />
//             <button className="w-1/4 bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors rounded-r">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-gray-600">
//         <div>© Maryam Blog</div>
//         <div className="flex flex-col gap-4 md:flex-row">
//           <div>
//             <span className="mr-2">Language:</span>
//             <span className="font-medium text-gray-900">English</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-blue-900 text-gray-100 mt-24 shadow-lg">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link to="/">
            <div className="text-2xl tracking-wide font-bold text-white">Maryam Blog</div>
          </Link>
          <p className="text-gray-300">Cyprus, Nicosia</p>
          <span className="font-semibold">
            <a
              href="https://www.ui.ac.ir/EN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-300"
            >
              https://www.uikniknknllk
            </a>
          </span>
          <span className="font-semibold text-gray-300">Tel: 793 2039-40</span>
          <div className="flex gap-6">
            <img src="/facebook.png" alt="Facebook" width={20} height={20} />
            <img src="/instagram.png" alt="Instagram" width={20} height={20} />
            <img src="/youtube.png" alt="YouTube" width={20} height={20} />
            <img src="/pinterest.png" alt="Pinterest" width={20} height={20} />
            <img src="/x.png" alt="Twitter (X)" width={20} height={20} />
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-full lg:w-1/2 text-gray-300">
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-2 text-white">Company</h1>
            <div className="flex flex-col gap-3">
              <Link to="" className="hover:underline">About Us</Link>
              <Link to="" className="hover:underline">Our Team</Link>
              <Link to="" className="hover:underline">Collaborations</Link>
              <Link to="" className="hover:underline">Blog</Link>
              <Link to="" className="hover:underline">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-2 text-white">Shop</h1>
            <div className="flex flex-col gap-3">
              <Link to="" className="hover:underline">New Articles</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg mb-2 text-white">Support</h1>
            <div className="flex flex-col gap-3">
              <Link to="" className="hover:underline">Customer Service</Link>
              <Link to="" className="hover:underline">My Account</Link>
              <Link to="" className="hover:underline">Privacy Policy</Link>
              <Link to="" className="hover:underline">Gift Cards</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6 text-gray-100">
          <h1 className="font-medium text-lg text-white">Subscribe</h1>
          <p className="text-gray-300">Be the first to get the latest news articles.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-3 w-3/4 border border-gray-500 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-l"
            />
            <button className="w-1/4 bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors rounded-r">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-gray-400">
        <div>© Maryam Blog</div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div>
            <span className="mr-2">Language:</span>
            <span className="font-medium text-white">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
