import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
// Ensure the path is correct

const Header = () => {
  const [walletBalance, setWalletBalance] = useState(0.0);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const toggleMenu = () => setIsProfileMenuOpen((prev) => !prev);

  const loadProfilePic = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfilePic(imgUrl);
    }
  };

  const removeProfilePic = () => setProfilePic(null);

  const logoutUser = () => {
    console.log("Logging out...");
    // Add your logout logic here (clear auth, redirect, etc.)
  };

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
          {/* Brand logo (desktop) */}
          <div className="brand-logo d-none d-lg-inline-block">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" width="150px" />
              </a>
            </div>
          </div>

          {/* Menu part */}
          <div className="header-menu-part">
            <div className="header-top">
              <div className="header-top-area">
                <ul className="left"></ul>
              </div>
            </div>

            <div className="header-bottom">
              <div className="header-wrapper justify-content-lg-end">
                {/* Mobile logo */}
                <div className="mobile-logo d-lg-none">
                  <a href="/">
                    <img src="/assets/logo/logo2.png" alt="logo" />
                  </a>
                </div>

                {/* Hanging download button */}
                <div className="hanging-button">
                  <div className="hanger"></div>
                  <a
                    href="https://github.com/testitg/PlayZelo/releases/download/PlayZelo_V2.0/playzelo-release.apk"
                    className="download-apk-btn"
                  >
                    ⬇ Download APK
                  </a>
                </div>

                {/* Menu area */}
                <div className="menu-area d-flex align-items-center">
                  {/* Wallet box */}
                  <div id="wallet-box1">
                    {/* <img
                      src="https://cdn-icons-png.flaticon.com/512/217/217853.png"
                      alt="wallet"
                    /> */}
                    <span>
                      ₹<span id="wallet-balance">{walletBalance.toFixed(2)}</span>
                    </span>
                  </div>

                  {/* Profile box */}
                  <div id="profile-box1">
                    <div className="profile-header" onClick={toggleMenu}>
                      {profilePic ? (
                        <img
                          src={profilePic}
                          alt="Profile"
                          className="profile-pic"
                          style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                        />
                      ) : (
                        <div id="profile-pic">U</div>
                      )}
                      <span id="user-name">User Name</span>
                    </div>

                    {isProfileMenuOpen && (
                      <div className="profile-menu" id="profile-menu">
                        <label htmlFor="uploadPic" className="menu-item">
                          Change Profile Picture
                        </label>
                        <input
                          type="file"
                          id="uploadPic"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={loadProfilePic}
                        />
                        <div className="menu-item" onClick={removeProfilePic}>
                          Remove Profile Picture
                        </div>
                        <div className="menu-item" onClick={logoutUser}>
                          Logout
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Login & Signup buttons */}
                  <div className="d-flex justify-content-between">
                    <div
                      id="login-btn1"
                      className="btn-outline pulse-green mx-3"
                      onClick={() => (window.location.href = "/login")}
                    >
                      <i className="icofont-user"></i>
                      <span>LOG IN</span>
                    </div>

                    <div
                      id="signup-btn1"
                      className="btn-outline pulse-pink"
                      onClick={() => (window.location.href = "/signup")}
                    >
                      <i className="icofont-users"></i>
                      <span>SIGN UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
