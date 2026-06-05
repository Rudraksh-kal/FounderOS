import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  
  import { auth } from "../firebase";
  
  function Login() {
  
    const handleGoogleLogin = async () => {
      try {
  
        const provider =
          new GoogleAuthProvider();
  
        const result =
          await signInWithPopup(
            auth,
            provider
          );
  
        console.log(result.user);
  
        alert("Login Successful");
  
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
  
        <div className="w-full max-w-md bg-[#111] border border-[#222] rounded-3xl p-10">
  
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>
  
            <p className="text-[#888] mt-4">
              Continue with Google
            </p>
          </div>
  
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-[#e5e5e5] transition-all duration-300"
          >
            Continue with Google
          </button>
  
        </div>
      </div>
    );
  }
  
  export default Login;