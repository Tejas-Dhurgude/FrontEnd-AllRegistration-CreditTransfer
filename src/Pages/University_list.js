import React from "react";
import { Navbar } from "../components";

export default function Universitylist() {
  return (
    <div className="bg-yellow-100 min-h-screen"> 
      <Navbar />
      <center>
        <table className="border border-collapse mt-8 rounded-lg shadow-lg w-[60%]"> 
          <thead>
            <tr>
              <th className="p-2 font-bold bg-blue-500 text-white">University Name</th>
              <th className="p-2 font-bold bg-blue-500 text-white">University Code</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 hover:bg-gray-200 transition duration-300">
              <td className="p-2">Mumbai University</td>
              <td className="p-2">1234</td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 transition duration-300">
              <td className="p-2">Pune University</td>
              <td className="p-2">3453</td>
            </tr>
            {/* Use arr.map() and return this component to display your entire array */}
          </tbody>
        </table>
      </center>
    </div>

  );
}
