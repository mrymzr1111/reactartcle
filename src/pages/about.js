
// import React from 'react';
// import Navvbar from '../components/navvbar';
// import Footer from '../components/footer/footer';

// export default function About() {
//   return (
//     <div className=" min-h-screen flex flex-col bg-gray-50">
//       <Navvbar />

     
//  <div className='pt-10  container'>
//      <h2  className='p-4 text-4x1 text-gray-800 font-bold text-2xl '>About Us</h2>
//    <p>

// Contact Form Website with Interactive UI & API Integration

// Overview:
// Developed a modern, responsive contact form website using ReactJS and Tailwind CSS. Features include smooth animations, background blur effects, and real-time form validation. Integrated with Web3Forms API for secure, seamless form submissions.

// Key Features:

// Responsive design for desktop, tablet, and mobile

// Custom contact form with live validation and error handling

// Interactive UI with CSS animations and hover effects

// Modern, clean aesthetic with intuitive layout

// Technologies:
// ReactJS, Tailwind CSS, CSS animations, Web3Forms API

// Role:
// Designed responsive layouts, implemented API integration, styled UI, added interactive features, and optimized validation.

// Challenges:
// Ensured real-time validation and error handling; optimized for mobile devices.

// Why Choose Me:
// Creative problem solver with strong ReactJS and API skills, focused on clean, functional, and visually appealing solutions.

// Outcome:
// Enhanced user engagement and positive feedback for a smooth, attractive, and functional contact form experience.


//    </p>
//    <div className='mt-0'> <img alt='pic' src='/pic/bbd.png'/></div>

//        </div>
    
//     </div>
//   );
// }
import React from 'react';
import Navvbar from '../components/navvbar';
import Footer from '../components/footer/footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navvbar />

      <div className="pt-10 container px-6 md:px-12">
        <h2 className="p-4 text-4xl text-gray-800 font-bold text-center">About Us</h2>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-blink">
            Project Overview
          </h3>
          <p className="mt-2 text-gray-600">
            This project involved developing a modern, responsive contact form website using ReactJS and Tailwind CSS, with features such as smooth animations, background blur effects, and real-time form validation. Additionally, I integrated a CRUD (Create, Read, Update, Delete) system for managing articles using a RESTful API, which allows for seamless article management directly from the dashboard.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
            Key Features
          </h3>
          <ul className="mt-2 list-disc pl-6 text-gray-600">
            <li>Responsive design optimized for desktop, tablet, and mobile devices</li>
            <li>Custom contact form with live validation and error handling</li>
            <li>Interactive UI with CSS animations and hover effects</li>
            <li>Modern, clean design with an intuitive layout</li>
            <li>Full CRUD functionality for articles directly from the dashboard</li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500">
            Technologies Used
          </h3>
          <ul className="mt-2 list-disc pl-6 text-gray-600">
            <li>ReactJS</li>
            <li>Tailwind CSS</li>
            <li>CSS Animations</li>
            <li>Web3Forms API for form submissions</li>
            <li>RESTful API for CRUD operations on articles</li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-600 to-purple-700">
            My Role
          </h3>
          <p className="mt-2 text-gray-600">
            I designed responsive layouts, implemented API integrations, and styled the user interface. Additionally, I developed the backend integration for CRUD operations on articles and ensured the smooth operation of all features, from form validation to managing articles via the dashboard.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Challenges Faced
          </h3>
          <p className="mt-2 text-gray-600">
            Ensuring real-time validation and error handling for the contact form was a challenge. For the CRUD functionality, I also had to ensure seamless synchronization between the frontend and backend, allowing admins to create, update, and delete articles with ease. Mobile optimization was another key area of focus.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-green-300">
            Why Choose Me?
          </h3>
          <p className="mt-2 text-gray-600">
            I bring a strong blend of creativity and technical expertise, particularly in ReactJS and API integration. My focus is always on delivering user-friendly, functional, and visually appealing solutions, whether for dynamic forms or managing content like articles through seamless API interactions.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
            Outcome
          </h3>
          <p className="mt-2 text-gray-600">
            The project resulted in a highly engaging and functional platform. The users enjoyed the interactive contact form, and the CRUD functionality for articles greatly improved content management efficiency. The smooth, user-friendly experience received positive feedback from both users and administrators.
          </p>
        </section>

        <div className="mt-8 text-center">
          <img alt="Project Screenshot" src="/pic/bbd.png" className="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
