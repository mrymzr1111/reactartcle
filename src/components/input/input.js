// export default  function Input(props) {
//     return(
//         <form  className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
//           <div>
//             <label className="block mb-1 font-semibold">{props.title}</label>
//             <input
//               type="text"
              
//               onChange={props.handleOnchange}
//               required
//               className="w-full border rounded p-2"
//               placeholder="Article Title"
//               name='title'
//             />
//           </div>

//           <div>
//             <label className="block mt-2 font-semibold">{props.duration}</label>
//             <input
//               type="text"
       
//               onChange={props.handleOnchange}
//               required
//               className="w-full border rounded p-2"
//               placeholder="e.g., Duration: 20 minutes"
//               name='duration'
//             />
//           </div>

//           <div>
//             <label className=" pb-3 block mb-1 font-semibold">Upload Image</label>
//             <input
//               type="file"
//               accept="image/*"
//             //   onChange={(e) => setImage(e.target.files[0])}
//               required
//               className="w-full"
//             />
//           </div>
// <div className='pt-4'><button type="submit" className="  w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition">
//             Add Article
//           </button>
// </div>
          
//           {/* {result && <p className="text-green-600 mt-2 text-center">{result}</p>} */}
//         </form>
//     )
// }

// components/input/Input.js
export default function Input({ label, name, type = "text", placeholder, handleOnchange }) {
  return (
    <div className="w-full  pt-0 max-w-lg space-x-0 space-y-0">
      <label className="block font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnchange}
        required
        className="w-full border rounded p-2"
        accept={type === "file" ? "image/*" : undefined}
      />
    </div>
  );
}
