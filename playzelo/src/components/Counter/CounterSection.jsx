import React, { useEffect, useState } from "react";

const CounterSection = () => {
  const [amount, setAmount] = useState(0);
  const finalAmount = 2251259; // 💰 jackpot amount

  useEffect(() => {
    // Animate counter
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 20; // ms per frame
    const increment = finalAmount / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= finalAmount) {
        start = finalAmount;
        clearInterval(counter);
      }
      setAmount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [finalAmount]);

  return (
    <section className="counter">
      <div className="container">
        <div className="counter__area">
          <div className="row align-items-center">
            {/* Left side */}
            <div className="col-lg-5 counter__left">
              <h2>TODAY YOU CAN WIN UPTO</h2>
            </div>

            {/* Right side */}
            <div className="col-lg-7 col-12 text-center counter__right">
              <ul className="d-flex flex-wrap justify-content-center">
                <li className="counter-text border-count counter-after">
                  <h3 className="m-0">₹</h3>
                </li>
                <li className="counter-text border-count">
                  <h3 className="counter__number mb-0">
                    {amount.toLocaleString("en-IN")}
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
