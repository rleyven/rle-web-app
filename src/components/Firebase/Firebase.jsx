import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import Navbar from "../Navbar/Navbar";
// import { useState } from "react";
// import { useCookies } from "react-cookie";
// const [cookies, setCookie] = useCookies(["access_token"]);

const firebaseConfig = {
  apiKey: "AIzaSyBImPsxKpnZO_q6flnNGp0Yy7oT4CmKwfQ",
  authDomain: "auth-d2839.firebaseapp.com",
  projectId: "auth-d2839",
  storageBucket: "auth-d2839.appspot.com",
  messagingSenderId: "1012853753507",
  appId: "1:1012853753507:web:e3416afda976854493a116",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);

//       // console.log(auth.currentUser.accessToken);
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       // const data = result;
//       // <Navbar data={data} />;

//       // console.log(<Navbar data={data} />);

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);

//       // const [userToken, setUserToken] = useState("");
//       // setCookie(result.user.accessToken);

//       // console.log(cookies);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
