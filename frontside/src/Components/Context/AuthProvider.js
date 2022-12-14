import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
  return useContext(AuthContext);
}
// sync -> if you have a user or not on login and logout
// It also exposes you lossley coupled auth functions
//
function AuthProvider({ children }) {
  // const history = useHistory();
  const [user, userSet] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetPassEmail, setResetEmail] = useState(null);
  const [otpPassEmail, setOtpPassEmail] = useState(null);

  async function signUp(name, password, email, confirm) {
    try {
      
      setLoading(true);
      console.log("signup will be here");
      let res = await axios.post("https://cult-food-app.herokuapp.com/api/v1/auth/signup",
        {
          name: name,
          password: password,
          ConfirmPassword: confirm,
          email,
        }
      );
      if (res.status == 201) {
        alert("user signed up");
      }
      setLoading(false);
    } catch (err) {
      console.log("err", err.message);
      if(err.message == "Request failed with status code 400")
        alert("imporper user data entry");

      setLoading(false);
    }
  }

  async function login(email, password) {
    let flag = true;
    try {
      setLoading(true);
      const res = await axios.post("https://cult-food-app.herokuapp.com/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      ); 
        if(res.status ==200){
         userSet(res.data.user);
         setLoading(false);
         return flag;
        }
    } catch (err) {
       flag = false;
       console.log(err.message);
       if (err.message == "Request failed with status code 404") {
         alert("user not found signup first");
       } else if (err.message == "Request failed with status code 400") {
         alert("email and password may be wrong");
       } else if (err.message == "Request failed with status code 500") {
         alert("Internal server error");
       }
       setLoading(false);
        return flag;
    }
   console.log("login will be here");
  }

  // logout :
  function logout() {
    localStorage.removeItem("user");
    userSet(null);
    console.log("logout will come here");
  }

  const value = {
    user,
    login,
    signUp,
    logout,
    resetPassEmail,
    setResetEmail,
    otpPassEmail,
    setOtpPassEmail
  };
  
  return (
    <AuthContext.Provider value={value}>
      {/* if not loading show childrens  */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;