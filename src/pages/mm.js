export default function Name() {
    return(
 <div className=" lg:text-5xl bg-red-500 md:bg-blue-600 flex justify-center"> 
       this is the tailwind css that were going to learn




<div className="p-6 bg-gray-100 min-h-screen flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-2">Card Title 1</h2>
        <p className="text-gray-700 mb-4">This is a description for card 1. It gives a brief overview of the content.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Read More</button>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-2">Card Title 2</h2>
        <p className="text-gray-700 mb-4">This is a description for card 2. It has some different content to check the layout.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Read More</button>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xs w-full">
        <h2 className="text-xl font-semibold mb-2">Card Title 3</h2>
        <p className="text-gray-700 mb-4">This card contains other interesting information to showcase styling.</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Read More</button>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-xs w-full  md:col-span-8 ">
        <h2 className="text-xl font-semibold mb-2">Card Title 4</h2>
        <p className="text-gray-700 mb-4">Last card with some closing content to complete the set of cards.</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Read More</button>
      </div>

  </div>
  
   </div>
    )
    
}