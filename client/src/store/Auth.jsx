import  { createContext, useContext, useEffect, useState } from "react";

// Create authentication context
 const AuthContext = createContext();

// AuthProvider component
 const AuthProvider = ({ children }) => {
    // Get token from localStorage
   
     const [isloggedin, setloggedin] = useState(false)
     const [isUser,setIsUser] = useState("")

    // Function to set token in localStorage
    const SetTokenToLS = (tokenValue) => {
        try {
            localStorage.setItem( "token",tokenValue);
            setloggedin(true)
        } catch (error) {
            console.error('Error setting token to localStorage:', error);
        }
    };

    // Check if user is logged in
  

    // Logout Function
    const LogOutUser = () => {
        try {
            // Update token state
           
            // Remove token from localStorage
            localStorage.removeItem("token");
            setloggedin(false)
            console.log("Logout successful",isloggedin);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
     //  ? Autnticate the User
     
     const userAuthentication = async () => {
         const token = localStorage.getItem("token")
         
         try {
             const response = await fetch(`http://localhost:5000/api/auth/user`, {
                 method: "GET",
                 headers: {
                     Authorization: `Bearer ${token}`
                     
                 }
             })

             if (response.ok) {
                 const Mydata = await response.json();
                 console.log('useEffect Data',Mydata);
                 setIsUser(Mydata)
             }
            
         } catch (error) {
            console.log(error)
         }
         
        }

     useEffect(() => {
         userAuthentication()
        
    },[])

    return (
        // Provide auth context values to children
        <AuthContext.Provider value={{ SetTokenToLS, isloggedin, LogOutUser,isUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
 const useAuth = () => {
    // Use useContext to access auth context
    const context = useContext(AuthContext);
    return context;
 };

 export { AuthProvider, useAuth , AuthContext};
