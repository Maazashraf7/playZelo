import React, { useState } from "react";
import backgroundImage from "../../assets/images/pageheader/bg.jpg";
import './Signup';

const monthMap = {
    January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
    July: "07", August: "08", September: "09", October: "10", November: "11", December: "12"
};

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: "", email: "", countryCode: "+91", phone: "",
        year: "Year", month: "Months", day: "Days",
        address: "", country: "Open this select menu", city: "", password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="min-h-screen w-screen bg-gray-900 text-white flex flex-col">
           

            <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <section className="py-8 sm:py-12 w-full max-w-md" style={{ maxWidth: 550 }}>
    <div
      className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
      style={{ backgroundColor: "rgba(35, 42, 92, 0.85)" }} // Slight transparency so the bg image shows
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-white">
        Register Now
      </h3>
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
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
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
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
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
              className="w-full p-3 sm:p-3 rounded bg-white text-black"
            >
              {["+91", "+98", "+88", "+99", "+77"].map(code => (
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
              className="w-full p-3 sm:p-3 rounded bg-white text-black"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <div className="sm:w-1/3">
            <label className="block mb-1 text-sm sm:text-base text-white">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-3 sm:p-3 rounded bg-white text-black"
            >
              <option value="Year">Year</option>
              {Array.from({ length: 55 }, (_, i) => 1971 + i).map(y => (
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
              className="w-full p-3 sm:p-3 rounded bg-white text-black"
            >
              <option value="Months">Months</option>
              {Object.keys(monthMap).map(m => (
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
              className="w-full p-3 sm:p-3 rounded bg-white text-black"
            >
              <option value="Days">Days</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
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
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block mb-1 text-sm sm:text-base text-white">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
          >
            <option value="">Select Country</option>
            {["Afghanistan", "Albania", "Algeria", "India", "USA", "UK"].map(c => (
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
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
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
            className="w-full p-3 sm:p-3 rounded bg-white text-black"
          />
        </div>

        {/* Submit */}
        <div>
          <button className="relative w-full py-1 sm:py-2 font-bold uppercase text-sm sm:text-base text-[#ff0052] rounded-lg font-oswald transition-transform duration-300 ease-[cubic-bezier(0.79,0.14,0.15,0.86)] default-button">
  <span className="relative z-10">Get Started Now</span>
</button>
        </div>
      </form>

      {/* Bottom */}
      <div className="mt-4 text-center text-sm sm:text-base text-white">
        Already a member? <a href="/login" className="text-pink-500 hover:underline">Login</a>
      </div>
    </div>
  </section>
</div>

        </div>
    );
};

export default RegistrationPage;