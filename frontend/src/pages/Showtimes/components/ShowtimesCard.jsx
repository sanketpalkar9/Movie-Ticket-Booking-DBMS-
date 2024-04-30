// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { showLoginModal } from "../../../reducers/authSlice";
// import { resetCart } from "../../../reducers/cartSlice";

// export const ShowtimesCard = (props) => {
//   const dates3d = props["3D"] ? Object.keys(props["3D"]) : [];
//   const dates2d = props["2D"] ? Object.keys(props["2D"]) : [];

//   const navigate = useNavigate();
//   const { isAuthenticated, signedPerson } = useSelector(
//     (store) => store.authentication
//   );
//   const dispatch = useDispatch();

//   // Get the current date and the next 3 days
//   const today = new Date();
//   const nextDates = [];
//   for (let i = 0; i < 4; i++) {
//     const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
//     const formattedDate = date.toISOString().slice(0, 10);
//     nextDates.push(formattedDate);
//   }

//   const show_types_3d =
//     dates3d.length &&
//     dates3d.map((curDate, id) => {
//       const curStartTimes = props["3D"][curDate].map((curStartTime) => {
//         return (
//           <li key={`${props["movie_name"]} 3d ${curStartTime}`}>
//             <button
//               className="showtimes-startime-btn"
//               onClick={() => {
//                 dispatch(resetCart());
//                 isAuthenticated && signedPerson.person_type === "Customer"
//                   ? navigate("/purchase")
//                   : dispatch(showLoginModal());
//               }}
//             >
//               {curStartTime}
//             </button>
//           </li>
//         );
//       });

//       const formattedDate = new Date(curDate).toLocaleString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });

//       return (
//         <div
//           className="showtimes-schedule"
//           key={`${props["movie_name"]} 3d ${id}`}
//         >
//           <h3 className="showtimes-date">{formattedDate}</h3>
//           <ul className="showtimes-startime-btn-list">{curStartTimes}</ul>
//         </div>
//       );
//     });

//   const show_types_2d =
//     dates2d.length &&
//     dates2d.map((curDate, id) => {
//       const curStartTimes = props["2D"][curDate].map((curStartTime) => {
//         return (
//           <li key={`${props["movie_name"]} 2d ${curStartTime}`}>
//             <button
//               className="showtimes-startime-btn"
//               onClick={() => {
//                 dispatch(resetCart());
//                 isAuthenticated && signedPerson.person_type === "Customer"
//                   ? navigate("/purchase")
//                   : dispatch(showLoginModal());
//               }}
//             >
//               {curStartTime}
//             </button>
//           </li>
//         );
//       });

//       const formattedDate = new Date(curDate).toLocaleString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       });

//       return (
//         <div
//           key={`${props["movie_name"]} 2d ${id}`}
//           className="showtimes-schedule"
//         >
//           <h3 className="showtimes-date">{formattedDate}</h3>
//           <ul className="showtimes-startime-btn-list">{curStartTimes}</ul>
//         </div>
//       );
//     });

//   return (
//     <div className="showtimes-card">
//       <div className="showtimes-card-leftpart">
//         <div className="showtimes-img-box">
//           <img
//             className="showtimes-img"
//             src={props.image_path}
//             alt={props.movie_name}
//           />
//         </div>

//         <h2 className="showtimes-title">{props.movie_name}</h2>
//         <button
//           className="showtimes-details-btn"
//           onClick={() => navigate(`/movieDetails/${props.id}`)}
//         >
//           See details
//         </button>
//       </div>

//       <div className="showtimes-screen-container">
//         {dates3d.length !== 0 && (
//           <div
//             className="showtimes-schedule-container-3d"
//             style={
//               dates2d.length !== 0 ? { borderBottom: "1px solid #313441" } : {}
//             }
//           >
//             <h2 className="showtimes-screen">3D</h2>
//             {show_types_3d}
//           </div>
//         )}

//         {dates2d.length !== 0 && (
//           <div className="showtimes-schedule-container-2d">
//             <h2 className="showtimes-screen">2D</h2>

//             {show_types_2d}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };



import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoginModal } from "../../../reducers/authSlice";
import { resetCart } from "../../../reducers/cartSlice";
import { useEffect, useState } from 'react';

export const ShowtimesCard = (props) => {
  const dates3d = props["3D"] ? Object.keys(props["3D"]) : [];
  const dates2d = props["2D"] ? Object.keys(props["2D"]) : [];

  const navigate = useNavigate();
  const { isAuthenticated, signedPerson } = useSelector(
    (store) => store.authentication
  );
  const dispatch = useDispatch();

  // State to hold today's date and next 3 dates
  const [dateList, setDateList] = useState([]);

  useEffect(() => {
    // Get the current date and the next 3 days
    const today = new Date();
    const nextDates = [];
    for (let i = 0; i < 4; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDate = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      nextDates.push(formattedDate);
    }
    setDateList(nextDates);
  }, []); // Run only once on component mount

  return (
    <div className="showtimes-card">
      <div className="showtimes-card-leftpart">
        <div className="showtimes-img-box">
          <img
            className="showtimes-img"
            src={props.image_path}
            alt={props.movie_name}
          />
        </div>

        <h2 className="showtimes-title">{props.movie_name}</h2>
        <button
          className="showtimes-details-btn"
          onClick={() => navigate(`/movieDetails/${props.id}`)}
        >
          See details
        </button>
      </div>

      <div className="showtimes-screen-container">
        {dates3d.length !== 0 && (
          <div
            className="showtimes-schedule-container-3d"
            style={
              dates2d.length !== 0 ? { borderBottom: "1px solid #313441" } : {}
            }
          >
            <h2 className="showtimes-screen">3D</h2>
            {dates3d.map((curDate, id) => (
              <div
                className="showtimes-schedule"
                key={`${props["movie_name"]} 3d ${id}`}
              >
                <h3 className="showtimes-date">{dateList[id]}</h3>
                <ul className="showtimes-startime-btn-list">
                  {props["3D"][curDate].map((curStartTime) => (
                    <li key={`${props["movie_name"]} 3d ${curStartTime}`}>
                      <button
                        className="showtimes-startime-btn"
                        onClick={() => {
                          dispatch(resetCart());
                          isAuthenticated && signedPerson.person_type === "Customer"
                            ? navigate("/purchase")
                            : dispatch(showLoginModal());
                        }}
                      >
                        {curStartTime}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {dates2d.length !== 0 && (
          <div className="showtimes-schedule-container-2d">
            <h2 className="showtimes-screen">2D</h2>
            {dates2d.map((curDate, id) => (
              <div
                key={`${props["movie_name"]} 2d ${id}`}
                className="showtimes-schedule"
              >
                <h3 className="showtimes-date">{dateList[id]}</h3>
                <ul className="showtimes-startime-btn-list">
                  {props["2D"][curDate].map((curStartTime) => (
                    <li key={`${props["movie_name"]} 2d ${curStartTime}`}>
                      <button
                        className="showtimes-startime-btn"
                        onClick={() => {
                          dispatch(resetCart());
                          isAuthenticated && signedPerson.person_type === "Customer"
                            ? navigate("/purchase")
                            : dispatch(showLoginModal());
                        }}
                      >
                        {curStartTime}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

