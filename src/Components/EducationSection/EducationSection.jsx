// import React from "react";
// import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

// const educationData = [
//   {
//     icon: <FaGraduationCap className="text-3xl text-primary" />,
//     title: "Bachelor Of Engineering In Information Technology",
//     institution: "Zeal College Of Engineering And Research | SPPU",
//     period: "2020-2024",
//     status: "Pursuing",
//   },
//   {
//     icon: <FaUniversity className="text-3xl text-primary" />,
//     title: "HSC Science | Informatic Practices",
//     institution: "Shri L. G. Haria Multipurpose School | CBSE",
//     period: "2018-2020",
//     status: "Completed",
//   },
// ];

// const EducationSection = () => {
//   return (
//     <section id="education" className="py-16 px-6 bg-[#0a7cda23]">
//       <div className="max-w-4xl mx-auto text-center ">
//         <h2 className="text-4xl mb-4 flex items-center justify-center gap-3 sm:text-4xl font-bold text-black">
//           <FaGraduationCap />
//           My <span className="text-purple-600">Education</span>
//         </h2>
//         <p className="text-gray-700 mb-12 font-medium">
//           Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
//         </p>

//         {educationData.map(({ icon, title, institution, period, status }, idx) => (
//           <div
//             key={idx}
//             className="bg-base-100 shadow-lg rounded-lg p-6 mb-8 text-left border-l-4 border-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           >
//             <div className="flex items-center gap-4">
//               {icon}
//               <div>
//                 <h3
//                   className="font-semibold"
//                   style={{ color: "#003366", fontSize: "20px", marginBottom: "4px" }}
//                 >
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 font-medium">{institution}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
//               <FaCalendarAlt />
//               <span>
//                 {period} | {status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;

import React from "react";
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const educationData = [
  {
    image: "https://i.ibb.co.com/tPBppQW5/download-15.jpg",
    title: "Diploma in Engineering Computer Science and Technology",
    institution: "Institute of Computer Science & Technology | ICST",
    period: "2022-2026",
    status: "Pursuing",
  },
  {
    image: "https://i.ibb.co.com/MkkhdcMM/download-16.jpg", 
    title: "SSC Science | Informatic Practices",
    institution: "Char Fakira High School | CFHS",
    period: "2017-2022",
    status: "Completed",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6 bg-[#0a7cda23]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-[#003366]">
          <FaGraduationCap />
          My <span className="text-purple-600">Education</span>
        </h2>
        <p className="text-gray-700 mb-12 font-medium">
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>

        {educationData.map(({ image, title, institution, period, status }, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-8"
          >
            {/* Image Section */}
            <div className="sm:w-1/3 w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="sm:w-2/3 w-full p-6 flex flex-col justify-center text-left">
              <h3 className="text-[#003366] text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-800 text-sm mb-3">{institution}</p>
              <p className="text-green-700 font-semibold text-sm">
                {period} | {status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
