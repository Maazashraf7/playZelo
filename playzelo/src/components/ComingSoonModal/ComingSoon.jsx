import React from "react";
import "@lottiefiles/dotlottie-wc"; // Import Lottie web component (dotlottie-wc)

const ComingSoonModal = () => {
  return (
    <div
      className="modal fade"
      id="comingSoonModal"
      tabIndex="-1"
      aria-labelledby="comingSoonModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content game-modal text-center p-3">
          
          {/* Header */}
          <div className="modal-header border-0">
            <h5
              className="modal-title w-100 text-gradient"
              id="comingSoonModalLabel"
            >
              🚀 COMING SOON
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Body with Lottie */}
          <div className="modal-body">
            <div className="lottie-box mb-3">
              <dotlottie-wc
                src="https://lottie.host/1d7d5b11-fe52-466f-b8d1-a59f4fbe1bd7/ARtLKMFKOm.lottie"
                style={{ width: "200px", height: "200px", margin: "auto" }}
                speed="1"
                autoplay
                loop
              />
            </div>
            <p className="text-white fw-bold fs-5">
              We are preparing something exciting for you! 🎉
            </p>
            <p className="small text-light">
              Stay tuned… Jackpot will be live soon.
            </p>
          </div>

          {/* Footer */}
          <div className="modal-footer border-0 justify-content-center">
            <button
              type="button"
              className="btn neon-btn"
              data-bs-dismiss="modal"
            >
              OK, GOT IT!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
