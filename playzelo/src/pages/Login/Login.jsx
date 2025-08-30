import React from "react";
import backgroundImage from "../../assets/images/pageheader/bg.jpg";
import '../Login/Login'


const Login = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-900 text-white flex flex-col">
       
        <div
  className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-10 bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div
    className="w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 rounded-xl shadow-lg"
    style={{ backgroundColor: "rgba(35, 42, 92, 0.85)" }} // Dark overlay so text is readable
  >
    <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-white">
      Login
    </h3>
 
    <form className="space-y-5" style={{ padding: 30 }}>
      {/* Username */}
      <div>
        <label className="block mb-1 text-sm sm:text-base md:text-lg text-white">
          User Name:
        </label>
        <input
          type="text"
          name="username"
          className="w-full px-3 sm:px-4 py-3 sm:py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
        />
      </div>
 
      {/* Password */}
      <div>
        <label className="block mb-1 text-sm sm:text-base md:text-lg text-white">
          Password:
        </label>
        <input
          type="password"
          name="password"
          className="w-full px-3 sm:px-4 py-3 sm:py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
        />
      </div>
 
      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm sm:text-base text-white">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="accent-blue-500 w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="whitespace-nowrap">Remember Me</span>
        </label>
        <a
          href="forgetpassword.html"
          className="text-blue-400 hover:underline"
        >
          Forget Password?
        </a>
      </div>
 
      {/* Submit */}
            <button className="relative w-full py-1 sm:py-2 font-bold uppercase text-sm sm:text-base text-[#ff0052] rounded-lg font-oswald transition-transform duration-300 ease-[cubic-bezier(0.79,0.14,0.15,0.86)] default-button">
  <span className="relative z-10">Get Started Now</span>
</button>
    </form>
 
    {/* Bottom Text */}
    <p className="text-center text-xl sm:text-base mt-6 text-white">
      Don’t Have an Account?{" "}
      <a href="signup.html" className="hover:underline text-blue-400">
        Sign Up
      </a>
    </p>
  </div>
</div>
 
      </div>
    </>
  );
};
 
export default Login;