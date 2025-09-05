// Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import "animate.css"; // ✅ animations ke liye
import backgroundImage from "../../assets/images/pageheader/bg.jpg";

const monthMap = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
  July: "07", August: "08", September: "09", October: "10", November: "11", December: "12"
};

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "", email: "", countryCode: "+91", phone: "",
    year: "Year", month: "Months", day: "Days",
    address: "", country: "", city: "", password: ""
  });
  const [loading, setLoading] = useState(false);

  // ✅ input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedDay =
        formData.day !== "Days" ? formData.day.toString().padStart(2, "0") : "";
      const dob =
        formData.year !== "Year" &&
        formData.month !== "Months" &&
        formData.day !== "Days"
          ? `${formData.year}-${monthMap[formData.month]}-${formattedDay}`
          : "";

      const payload = {
        username: formData.username,
        email: formData.email,
        phone: formData.countryCode + formData.phone,
        dob,
        address: formData.address,
        country: formData.country,
        city: formData.city,
        password: formData.password,
      };

      const response = await fetch("https://gamer-lk3e.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify({
          username: formData.username,
          email: formData.email
        }));
        if (data.authtoken) localStorage.setItem("token", data.authtoken);

        // 🎉 Stylish success alert
        Swal.fire({
          title: "🎉 Welcome!",
          text: "Your account has been created successfully.",
          icon: "success",
          background: "#1e293b",
          color: "#f9fafb",
          confirmButtonText: "Go to Login 🚀",
          confirmButtonColor: "#10B981",
          timer: 2000,
          timerProgressBar: true,
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
        }).then(() => navigate("/login"));
      } else {
        // ❌ Stylish error alert
        Swal.fire({
          title: "⚠️ Signup Failed",
          text: data.message || data.error || "Please try again.",
          icon: "error",
          background: "#1e293b",
          color: "#f9fafb",
          confirmButtonText: "Retry 🔁",
          confirmButtonColor: "#ef4444",
          showClass: { popup: "animate__animated animate__shakeX" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
        });
      }
    } catch (error) {
      // 🔥 Network/Server error
      Swal.fire({
        title: "🔥 Oops!",
        text: error.message || "Something went wrong.",
        icon: "error",
        background: "#1e293b",
        color: "#f9fafb",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ef4444",
        showClass: { popup: "animate__animated animate__shakeX" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-900 text-white flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="py-8 sm:py-12 w-full max-w-md" style={{ maxWidth: 550 }}>
        <div
          className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
          style={{ backgroundColor: "rgba(35, 42, 92, 0.85)" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-white">
            Register Now
          </h3>

          {/* ✅ Form (UI unchanged) */}
          <form onSubmit={handleSubmit} className="space-y-4" style={{ padding: 18 }}>
            {/* Username */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">User Name:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="User Name"
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <div className="sm:w-1/3">
                <label className="block mb-1 text-sm sm:text-base text-white">Country Code:</label>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white text-black"
                >
                  {["+91", "+98", "+88", "+99", "+77"].map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
              </div>
              <div className="sm:w-2/3">
                <label className="block mb-1 text-sm sm:text-base text-white">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 rounded bg-white text-black"
                  required
                />
              </div>
            </div>

            {/* DOB */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <div className="sm:w-1/3">
                <label className="block mb-1 text-sm sm:text-base text-white">Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white text-black"
                >
                  <option value="Year">Year</option>
                  {Array.from({ length: 55 }, (_, i) => 1971 + i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div className="sm:w-1/3">
                <label className="block mb-1 text-sm sm:text-base text-white">Month</label>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white text-black"
                >
                  <option value="Months">Months</option>
                  {Object.keys(monthMap).map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="sm:w-1/3">
                <label className="block mb-1 text-sm sm:text-base text-white">Day</label>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white text-black"
                >
                  <option value="Days">Days</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">Country:</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
              >
                <option value="">Select Country</option>
                {["Afghanistan", "Albania", "Algeria", "India", "USA", "UK"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm sm:text-base text-white">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`relative w-full py-[14px] px-6 text-[16px] font-bold uppercase rounded-md font-oswald transition-all duration-300 ease-in-out
                  ${loading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-white text-[#ff0052] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px]'}
                  after:content-[''] after:absolute after:top-1 after:left-1 after:w-full after:h-12 after:rounded-md 
                  after:-z-10 after:bg-[#ff0052] after:transition-all after:duration-100 after:ease-in-out
                  hover:after:top-0 hover:after:left-0`}
              >
                <span className="relative z-10">
                  {loading ? 'Submitting...' : 'Get Started Now'}
                </span>
              </button>
            </div>
          </form>

          {/* Bottom */}
          <div className="mt-4 text-center text-sm sm:text-base text-white">
            Already a member?{" "}
            <a href="/login" className="text-pink-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;