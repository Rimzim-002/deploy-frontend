import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./src/Pages/auth/Login";
import Signup from "./src/Pages/auth/Signup";
import Admindashboard from "./Pages/dashboard/Admindashboard/Admindashboard";
import UserManagement from "./Pages/dashboard/Admindashboard/Usermanagement";
import Home from "./src/Pages/dashboard/userdashboard/Homepage";
import MoviesManagement from "./Pages/dashboard/Admindashboard/Moviesmanagement";
import UserDashboard from "./src/Pages/dashboard/userdashboard/Userdashboard";
import MovieDetails from "./src/Pages/dashboard/userdashboard/Moviedetailpage";
import BookingPage from "./src/Pages/dashboard/userdashboard/Bookingpage";
import UserProfile from "./src/Pages/dashboard/userdashboard/UserProfile";
import Myorders from "./src/Pages/dashboard/userdashboard/Myorders";
import TotalRevenue from "./Pages/dashboard/Admindashboard/Totalrevenue";

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<Admindashboard />} />
      <Route path="/admindashboard/allusers" element={<UserManagement />} />
      <Route path="/admindashboard/allmovies" element={<MoviesManagement />} />
      <Route path="/admindashboard/totalRevenue" element={<TotalRevenue />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/dashboard/getmovie/:movieId" element={<MovieDetails />} />
      <Route path="/user/dashboard/bookticket/:movieId" element={<BookingPage />} />
      <Route path="/user/dashboard/profile" element={<UserProfile />} />
      <Route path="/user/dashboard/myorders" element={<Myorders />} />
    </Routes>
  );
}

export default Approutes;
