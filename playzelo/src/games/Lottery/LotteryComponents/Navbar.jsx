import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo2.png";
import {
  Ticket,
  FileText,
  Trophy,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      path: "/lottery",
      label: "Lotteries",
      icon: <Ticket size={18} />,
    },
    {
      path: "/lottery/results",
      label: "Results",
      icon: <FileText size={18} />,
    },
    {
      path: "/lottery/winners",
      label: "Winners",
      icon: <Trophy size={18} />,
    },
  ];

  return (
    <nav className="w-full bg-gray-900/90 shadow-md border-b border-gray-800 sticky top-0 z-50" role="navigation" aria-label="Primary Navigation">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Playzelo Logo" className="h-16 w-28 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 font-semibold tracking-wide relative group transition duration-300 ${
                  isActive ? "text-red-500" : "text-white"
                }`
              }
            >
              <span className="text-red-500 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-pink-500">
                {item.label}
              </span>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Right Section - Cart + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" aria-label="Shopping Cart" role="link" tabIndex={0}>
            <ShoppingCart className="text-red-600" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Backdrop */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          ></div>

          <nav
            id="mobile-menu"
            aria-label="Mobile Menu"
            className="md:hidden bg-gray-900/95 border-t border-gray-800 px-4 py-4 space-y-4 shadow-md fixed top-20 left-0 right-0 z-50"
          >
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium transition duration-300 ${
                    isActive ? "text-red-500" : "text-white hover:text-red-500"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </>
      )}
    </nav>
  );
};

export default Navbar;
