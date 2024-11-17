// // import background from "../assets/images/background.png";
// export default function LetterBox() {
//   const stats = [
//     { id: 1, value: "93M+", description: "Credentials earned and managed" },
//     { id: 2, value: "93M+", description: "Credentials earned and managed" },
//     { id: 3, value: "93M+", description: "Credentials earned and managed" },
//   ];
//   return (
//     <div>
//       <div className="flex justify-center items-center image-container bg-[url(/background.png)] bg-no-repeat bg-cover ">
//         <div className="mt-36 mb-12">
//           <h1 className="font-bold text-3xl text-center mb-4">
//             {" "}
//             The Numbers Don’t Lie
//           </h1>
//           <div>
//             <div className="flex items-center justify-center ">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {stats.map((stat) => (
//                   <div
//                     key={stat.id}
//                     className="bg-white shadow-md rounded-lg p-6 text-center border"
//                   >
//                     <h2 className="text-orange-500 text-3xl font-bold">
//                       {stat.value}
//                     </h2>
//                     <p className="text-gray-600">{stat.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
