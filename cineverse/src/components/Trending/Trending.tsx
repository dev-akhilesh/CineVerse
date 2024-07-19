// // @ts-nocheck

// import UseTrendingList from "@/hooks/useTrandingList";
// import TrendingMovie from "./TrendingMovie";
// import TrendingTv from "./TrendingTv";
// import LoadingSkeleton from "../LoadingSkeleton";

// const Trending = () => {
//   const { trendingData } = UseTrendingList();
//   const image = trendingData?.slice(0, 1).map((data) => {
//     return data.poster_path;
//   });
//   return (
//     <>
//       <img
//         src={`https://image.tmdb.org/t/p/original${image}`}
//         alt="poster"
//         className=" transition-all min-w-full object-cover"
//         style={{ height: "700px", objectPosition: "10% 15%" }}
//       />
//       {/* <LoadingSkeleton /> */}
//       <TrendingMovie />
//       <TrendingTv />
//     </>
//   );
// };

// export default Trending;

// // @ts-nocheck

// import UseTrendingList from "@/hooks/useTrandingList";
// import TrendingMovie from "./TrendingMovie";
// import TrendingTv from "./TrendingTv";
// import { useState, useEffect } from "react";
// import LoadingSkeleton from "../LoadingSkeleton";

// const Trending = () => {
//   const { trendingData } = UseTrendingList();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = trendingData?.slice(0, 7).map((data) => data.poster_path);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <>
//       <div
//         className="relative w-full overflow-hidden"
//         style={{ height: "1000px" }}
//       >
//         <div
//           className="flex transition-transform duration-1000"
//           style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
//         >
//           {images?.map((image, index) => (
//             <img
//               key={index}
//               src={`https://image.tmdb.org/t/p/original${image}`}
//               alt={`poster-${index}`}
//               style={{ height: "1000px" }}
//               className="w-full transition-all min-w-full"
//             />
//           ))}
//         </div>
//       </div>
//       {/* <LoadingSkeleton /> */}
//       <TrendingMovie />
//       <TrendingTv />
//     </>
//   );
// };

// export default Trending;

// @ts-nocheck

import UseTrendingList from "@/hooks/useTrandingList";
import TrendingMovie from "./TrendingMovie";
import TrendingTv from "./TrendingTv";
import { useState, useEffect } from "react";
import LoadingSkeleton from "../LoadingSkeleton";

const Trending = () => {
  const { trendingData } = UseTrendingList();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = trendingData?.slice(0, 7).map((data) => data.poster_path);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      {/* <div
        className="relative w-screen overflow-hidden"
        style={{ height: "1000px" }}
      >
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images?.map((image, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${image}`}
              alt={`poster-${index}`}
              style={{ height: "1000px" }}
              className="w-screen transition-all min-w-full object-fill"
            />
          ))}
        </div>
      </div> */}

      <TrendingMovie />
      <TrendingTv />
    </>
  );
};

export default Trending;
