// import React, { useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import About from "./components/About";
// import Chatbot from "./components/Chatbot";
// import Consultancy from "./components/Consultancy";
// import ContactUs from "./components/ContactUs";
// import Feedback from "./components/Feedback";
// import { auth } from "./components/Firebase";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Navbar from "./components/Nav";
// import Profile from "./components/Profile";
// import SignUp from "./components/Register";
// import Footer from "./components/Footer";
// import UserInfoForm from "./components/UserInfoForm";
// import Tasks from "./components/TasksDone";
// // import Character from "./components/Character";
// // import SigninwithGoogle from "./components/signInWIthGoogle";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ChatApplication from "./components/ChatApplication";
// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState();
//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   });
//   return (
//     <Router>
//         {/* <Navbar /> */}

//       <div className="App">
//         {/* <div className="auth-wrapper"> */}
//           {/* <div className = "auth-inner"> */}
//             <Routes>
//               <Route path="/" element={user ? <Navigate to="/login" /> : <Login />}/>
//               <Route path="/about" element={<About />} />
//               <Route path="/chatbot" element={<Chatbot />} />
//               <Route path="/consultancy" element={<Consultancy />} />
//               <Route path="/contactUs" element={<ContactUs />} />  
//               {/* <Route  */}
//               <Route path="/chatApplication" element={<ChatApplication />} />
//               <Route path="/feedback" element={<Feedback />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/navbar" element={<Navbar />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/footer" element={<Footer />} />
//               <Route path="/UserInfoForm" element={<UserInfoForm />} />
//               <Route path="/tasksDone"element={<Tasks/>}/>
//               {/* <Route path="/sign-in-with-google" element={<SigninwithGoogle />} /> */}
//             </Routes>
            
//             <ToastContainer />
//           {/* </div> */}
//         {/* </div> */}
//       </div>
//       {/* <Footer/> */}
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import About from "./components/About";
// import Chatbot from "./components/Chatbot";
// import Consultancy from "./components/Consultancy";
// import ContactUs from "./components/ContactUs";
// import Feedback from "./components/Feedback";
// import { auth } from "./components/Firebase";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Navbar from "./components/Nav";
// import Profile from "./components/Profile";
// import SignUp from "./components/Register";
// import Footer from "./components/Footer";
// import UserInfoForm from "./components/UserInfoForm";
// import Tasks from "./components/TasksDone";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [user, setUser] = useState();
//   const [darkMode, setDarkMode] = useState(false);

//   // Check the dark mode state from localStorage when the app loads
//   useEffect(() => {
//     const savedMode = localStorage.getItem('darkMode');
//     if (savedMode === 'true') {
//       setDarkMode(true);
//     }
//   }, []);

//   // Toggle dark mode and store it in localStorage
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Apply dark mode class to the document body
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark');
//       localStorage.setItem('darkMode', 'true');
//     } else {
//       document.body.classList.remove('dark');
//       localStorage.removeItem('darkMode');
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <Router>
//       <div className={`App ${darkMode ? 'dark' : ''}`}>
//         {/* Dark Mode Toggle Button */}
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 bg-gray-800 text-white rounded-md fixed top-4 right-4"
//         >
//           {darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
//         </button>

//         <Routes>
//           <Route path="/" element={user ? <Navigate to="/login" /> : <Login />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/chatbot" element={<Chatbot />} />
//           <Route path="/consultancy" element={<Consultancy />} />
//           <Route path="/contactUs" element={<ContactUs />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/navbar" element={<Navbar />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/footer" element={<Footer />} />
//           <Route path="/UserInfoForm" element={<UserInfoForm />} />
//           <Route path="/tasksDone" element={<Tasks />} />
//         </Routes>

//         <ToastContainer />
//       </div>
//     </Router>
//   );
// }

// export default App;