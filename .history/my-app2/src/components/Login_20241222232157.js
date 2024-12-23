// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "./firebase";
// import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in Successfully");
//       window.location.href = "/home"; // Redirect to home
//       toast.success("User logged in Successfully", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.error("Login error: ", error.message);
//       toast.error("Invalid credentials. Please try again.", {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3><b>Login</b></h3>

//           <div className="mb-3">
//             <b><label htmlFor="email">Email Address</label></b>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="password">Password</label></b>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <b><p className="forgot-password text-right">
//             New user? <a href="/register">Register Here</a>
//           </p></b>
//           <SignInwithGoogle />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;





// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./Firebase";
// import { toast } from "react-toastify";
// import SignInwithGoogle from "./SignInWIthGoogle";
// import "./Login.css"; // Add this CSS file

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in Successfully");
//       window.location.href = "/home"; // Redirect to home
//       toast.success("User logged in Successfully", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.error("Login error: ", error.message);
//       toast.error("Invalid credentials. Please try again.", {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3><b>Login</b></h3>
//           <div className="mb-3">
//             <b><label htmlFor="email">Email Address</label></b>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="password">Password</label></b>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <b><p className="forgot-password text-right">
//             New user? <a href="/register">Register Here</a>
//           </p></b>
//           <SignInwithGoogle />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./Firebase";
// import { toast } from "react-toastify";
// import SignInwithGoogle from "./SignInWIthGoogle";
// import "./Login.css"; // Make sure the CSS file is imported

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in Successfully");
//       window.location.href = "/home"; // Redirect to home
//       toast.success("User logged in Successfully", {
//         position: "top-center",
//       });
//     } catch (error) {
//       console.error("Login error: ", error.message);
//       toast.error("Invalid credentials. Please try again.", {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3><b>Login</b></h3>
//           <div className="mb-3">
//             <b><label htmlFor="email">Email Address</label></b>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <b><label htmlFor="password">Password</label></b>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <b><p className="forgot-password text-right">
//             New user? <a href="/register">Register Here</a>
//           </p></b>
//           <SignInwithGoogle />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;





import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./SignInWIthGoogle";
import "./Login.css"; // Make sure the CSS file is imported

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home"; // Redirect to home
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Login error: ", error.message);
      toast.error("Invalid credentials. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="auth-wrapper">
      {/* Icon/Image container */}
      <div className="icon-container">
        <img src={require('../.png')} alt="icon" />
      </div>

      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3><b>Login</b></h3>
          <div className="mb-3">
            <b><label htmlFor="email">Email Address</label></b>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <b><label htmlFor="password">Password</label></b>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <b><p className="forgot-password text-right">
            New user? <a href="/register">Register Here</a>
          </p></b>
          <SignInwithGoogle />
        </form>
      </div>
    </div>
  );
}

export default Login;