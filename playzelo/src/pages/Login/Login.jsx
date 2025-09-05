import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import backgroundImage from "../../assets/images/pageheader/bg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot password states
  const [showForgot, setShowForgot] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://gamer-lk3e.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        localStorage.setItem(
          "user",
          JSON.stringify({
            username: formData.username,
            email: data.email || "",
            profilePic: data.profilePic || null,
          })
        );

        Swal.fire({
          title: "🎉 Welcome Back!",
          text: "Login successful, redirecting...",
          icon: "success",
          confirmButtonText: "Go to Home 🚀",
          confirmButtonColor: "#10B981",
          background: "#1e293b",
          color: "#f9fafb",
          timer: 2000,
          timerProgressBar: true,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          title: "❌ Login Failed!",
          text: data.message || "Invalid credentials",
          icon: "error",
          confirmButtonText: "Try Again 🔁",
          confirmButtonColor: "#ef4444",
          background: "#1e293b",
          color: "#f9fafb",
          showClass: {
            popup: "animate__animated animate__shakeX",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "⚠️ Error",
        text: "Something went wrong, please try again.",
        icon: "error",
        confirmButtonColor: "#f43f5e",
        background: "#1e293b",
        color: "#f9fafb",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Forgot password handlers
  const handleSendOtp = async () => {
    try {
      const res = await fetch(
        "https://gamer-lk3e.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        Swal.fire({
          title: "📩 OTP Sent!",
          text: "Check your email for OTP",
          icon: "info",
          confirmButtonColor: "#3b82f6",
          background: "#1e293b",
          color: "#f9fafb",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setStep(2);
      } else {
        Swal.fire({
          title: "❌ Failed",
          text: data.msg || "Failed to send OTP",
          icon: "error",
          confirmButtonColor: "#ef4444",
          background: "#1e293b",
          color: "#f9fafb",
        });
      }
    } catch {
      Swal.fire({
        title: "⚠️ Error",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonColor: "#f43f5e",
        background: "#1e293b",
        color: "#f9fafb",
      });
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch(
        "https://gamer-lk3e.onrender.com/api/auth/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        Swal.fire({
          title: "✅ OTP Verified!",
          icon: "success",
          confirmButtonColor: "#10B981",
          background: "#1e293b",
          color: "#f9fafb",
          showClass: {
            popup: "animate__animated animate__zoomIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setStep(3);
      } else {
        Swal.fire({
          title: "❌ Invalid OTP",
          text: data.msg || "OTP verification failed",
          icon: "error",
          confirmButtonColor: "#ef4444",
          background: "#1e293b",
          color: "#f9fafb",
        });
      }
    } catch {
      Swal.fire({
        title: "⚠️ Error",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonColor: "#f43f5e",
        background: "#1e293b",
        color: "#f9fafb",
      });
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: "⚠️ Passwords do not match!",
        icon: "warning",
        confirmButtonColor: "#facc15",
        background: "#1e293b",
        color: "#f9fafb",
        showClass: {
          popup: "animate__animated animate__shakeX",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }

    try {
      const res = await fetch(
        "https://gamer-lk3e.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword, confirmPassword }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "🎉 Password Reset Successful!",
          icon: "success",
          confirmButtonColor: "#10B981",
          background: "#1e293b",
          color: "#f9fafb",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setShowForgot(false);
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        Swal.fire({
          title: "❌ Failed",
          text: data.msg || "Something went wrong!",
          icon: "error",
          confirmButtonColor: "#ef4444",
          background: "#1e293b",
          color: "#f9fafb",
        });
      }
    } catch {
      Swal.fire({
        title: "⚠️ Error",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonColor: "#f43f5e",
        background: "#1e293b",
        color: "#f9fafb",
      });
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white flex flex-col">
      {/* Login form */}
      {!showForgot && (
        <div
          className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div
            className="w-full max-w-md p-6 sm:p-8 rounded-xl shadow-lg"
            style={{ backgroundColor: "rgba(35, 42, 92, 0.85)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
              Login
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" style={{ padding: 30 }}>
              {/* Username */}
              <div>
                <label className="block mb-1">User Name:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-3 rounded-lg bg-gray-700 text-black focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  style={{ backgroundColor: "white" }}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block mb-1">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue"
                  style={{marginTop : "15px"}}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500 w-4 h-4" />
                  <span>Remember Me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgot(true)}
                  className="text-blue-400 hover:text-black underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`relative w-full py-[18px] px-6 text-[16px] font-bold uppercase 
                rounded-[8px] overflow-hidden transition-all duration-300 ease-in-out
                ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-white text-[#ff0052] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px]"
                }
                after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-[90%] 
                after:rounded-[5px] after:-z-10 after:bg-[#ff0052] 
                after:transition-all after:duration-200 after:ease-in-out
                hover:after:top-0 hover:after:left-0`}
                style={{ borderRadius: "5px" }}
              >
                <span className="relative z-10">
                  {loading ? "Logging in..." : "Get Started Now"}
                </span>
              </button>
            </form>

            {/* 🔥 Added Signup Redirect */}
            <div className="mt-4 text-center text-sm sm:text-base text-white">
              Don’t have an account?{" "}
              <a href="/signup" className="text-pink-500 hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgot && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-blue text-gray-800 w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
              onClick={() => setShowForgot(false)}
            >
              ✕
            </button>

            {step === 1 && (
              <div className="space-y-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 p-8 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.4)] w-full max-w-md mx-auto animate-fade-in">
                <h3 className="text-2xl font-bold text-center text-white drop-shadow-sm">
                  Forgot Password
                </h3>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 text-sm rounded-lg bg-white border border-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  style={{ borderRadius: "10px" }}
                />
                <button
                  onClick={handleSendOtp}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  style={{ borderRadius: "10px", marginTop: "5px", padding: "2px" }}
                >
                  Send OTP
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center text-green-600">
                  Verify OTP
                </h2>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
                <button
                  onClick={handleVerifyOtp}
                  className="w-full bg-green-600 text-white p-3 rounded-lg"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center text-purple-600">
                  Reset Password
                </h2>
                <p className="text-sm text-center text-gray-500">
                  Enter your new password below.
                </p>

                {/* New Password */}
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  onClick={handleResetPassword}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition"
                >
                  Reset Password
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;