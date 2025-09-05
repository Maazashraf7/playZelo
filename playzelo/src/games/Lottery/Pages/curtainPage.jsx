import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lotteries from "./LotteryLanding";
// import LotteryPage from "./LotteryPage";
// import LotteryLayout from "./LotteryLayouts";

export default function CurtainIntro() {
  const overlayRef = useRef(null);
  const gameRef = useRef(null);
  const sparkleRef = useRef(null);

  // Sparkles
  useEffect(() => {
    const wrap = sparkleRef.current;
    if (!wrap) return;
    const count = 70;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 2.4 + "s";
      s.style.animationDuration = 1.8 + Math.random() * 2.2 + "s";
      wrap.appendChild(s);
    }
  }, []);

  // ===== Audio + GSAP curtain animation functions stay same =====
  function playRevealSfx() {
    // (keep your audio code here)
  }

  function playCurtainOpen() {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.set(["#curtainL", "#curtainR"], { yPercent: 0, rotationZ: 0 });
    tl.from(["#curtainL", "#curtainR"], {
      duration: 0.6,
      yPercent: -2,
      ease: "sine.inOut",
      stagger: { each: 0.05, from: "edges" },
    });

    tl.to(".rope", { duration: 0.5, scale: 1.06, ease: "power2.out" }, 0.05);

    tl.to(
      "#curtainL",
      {
        duration: 1.6,
        xPercent: -110,
        rotationZ: -1.5,
        transformOrigin: "top right",
        ease: "power4.inOut",
      },
      0.15
    );
    tl.to(
      "#curtainR",
      {
        duration: 1.6,
        xPercent: 110,
        rotationZ: 1.5,
        transformOrigin: "top left",
        ease: "power4.inOut",
      },
      0.15
    );

    tl.to(["#curtainL", "#curtainR"], {
      duration: 0.6,
      rotationZ: 0,
      ease: "sine.out",
    });

    tl.to(overlayRef.current, {
      duration: 0.5,
      opacity: 0,
      pointerEvents: "none",
      onComplete() {
        overlayRef.current.style.display = "none";
        gameRef.current.style.display = "block";
        gsap.from(".game-card", {
          duration: 0.6,
          y: 20,
          opacity: 0,
          ease: "power3.out",
        });
      },
    });
  }

  const handleEnter = () => {
    playRevealSfx();
    playCurtainOpen();
  };

  return (
    <>
      {/* === Internal CSS here === */}
      <style>{`
        :root{
          --velvet:#7a001a;
          --velvet2:#9c1730;
          --shadow:rgba(0,0,0,.45);
          --gold:#d4af37;
          --bg:#0b0f17;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{
          margin:0;
          background:#10141e;
          color:#fff;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
          overflow-x:hidden;
        }
        .curtain-overlay{
          position:fixed; inset:0;
          z-index:9999;
          background: radial-gradient(1200px 500px at 50% -100px, #1b2030 0%, #0b0f17 55%, #06080d 100%);
          display:flex; align-items:stretch; justify-content:center;
          overflow:hidden;
        }
        .curtain-overlay::after{
          content:"";
          position:absolute; left:50%; bottom:-15%;
          transform:translateX(-50%);
          width:140vw; height:70vh; border-radius:50%;
          background: radial-gradient(closest-side, rgba(255,255,255,.08), transparent 70%);
          filter: blur(30px);
          pointer-events:none;
        }
        .stage-top-banner{
          position:absolute; top:0; left:0; right:0; height:90px;
          background:
            linear-gradient(to bottom, rgba(0,0,0,.7), transparent),
            repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,255,255,.05) 18px 19px),
            linear-gradient(180deg, #1a1f2c, #0f1420);
          border-bottom:2px solid rgba(255,255,255,.07);
          display:flex; align-items:center; justify-content:center;
          z-index:3;
        }
        .stage-title{
          letter-spacing:.12em;
          text-transform:uppercase;
          font-weight:800;
          font-size:14px;
          color:#e9d8a6;
          text-shadow:0 1px 0 #000, 0 0 20px rgba(212,175,55,.25);
        }
        .curtain{
          flex:1 1 50%;
          position:relative;
          z-index:2;
          box-shadow: inset 0 0 60px rgba(0,0,0,.6);
          transform-origin: top center;
          background:
            repeating-linear-gradient(90deg,
              rgba(0,0,0,.25) 0px, rgba(0,0,0,.25) 6px,
              rgba(0,0,0,0) 6px, rgba(0,0,0,0) 22px),
            radial-gradient(120% 120% at 50% -20%, var(--velvet2), var(--velvet));
          filter: saturate(1.1) contrast(1.05);
        }
        .curtain.left{ border-right:1px solid rgba(0,0,0,.35); }
        .curtain.right{ border-left:1px solid rgba(0,0,0,.35); }
        .curtain::before{
          content:"";
          position:absolute; top:0; bottom:0; width:6px;
          background: linear-gradient(180deg, #bb9c2a, #f3d46a 40%, #bb9c2a);
          box-shadow:0 0 8px rgba(255,215,0,.25);
        }
        .curtain.left::before{ right:-3px; }
        .curtain.right::before{ left:-3px; }
        .fringe{
          position:absolute; left:0; right:0; bottom:-18px; height:18px;
          background:
            linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,0)),
            repeating-linear-gradient(90deg, var(--gold) 0 8px, #c9a63a 8px 16px);
          clip-path: polygon(0 0, 100% 0, 100% 60%, 95% 100%, 90% 60%, 85% 100%, 80% 60%, 75% 100%, 70% 60%, 65% 100%, 60% 60%, 55% 100%, 50% 60%, 45% 100%, 40% 60%, 35% 100%, 30% 60%, 25% 100%, 20% 60%, 15% 100%, 10% 60%, 5% 100%, 0 60%);
          box-shadow: 0 5px 10px var(--shadow);
        }
        .rope{
          position:absolute; top:38%;
          width:180px; height:180px; border-radius:50%;
          border:10px solid var(--gold);
          box-shadow: inset 0 0 0 5px rgba(0,0,0,.15), 0 0 16px rgba(212,175,55,.25);
          filter: drop-shadow(0 4px 10px rgba(0,0,0,.5));
        }
        .rope::after{
          content:""; position:absolute; inset:8%;
          border-radius:50%;
          border:3px dashed rgba(0,0,0,.25);
        }
        .curtain.left .rope{ right:-90px; }
        .curtain.right .rope{ left:-90px; }
        .sparkle{
          position:absolute; inset:0; pointer-events:none; z-index:4;
        }
        .sparkle i{
          position:absolute; width:2px; height:2px; background:rgba(255,255,255,.75);
          border-radius:50%; opacity:0; transform:scale(0.5);
          box-shadow:0 0 8px rgba(255,255,255,.8);
          animation: twinkle 2.4s linear infinite;
        }
        @keyframes twinkle{
          0%{opacity:0; transform:scale(.3)}
          10%{opacity:.8; transform:scale(1)}
          60%{opacity:.15; transform:scale(.6)}
          100%{opacity:0; transform:scale(.3)}
        }
        .enter-wrap{
          position:absolute; inset:auto 0 40px 0;
          display:flex; justify-content:center; z-index:5;
        }
        .enter-btn{
          appearance:none; border:0; cursor:pointer;
          padding:14px 20px; border-radius:999px;
          background: radial-gradient(100% 200% at 50% 0%, #ffe89a, #e3c152 40%, #a17c1f);
          color:#2b2204; font-weight:800; letter-spacing:.08em; text-transform:uppercase;
          box-shadow: 0 10px 24px rgba(0,0,0,.45), inset 0 2px 0 rgba(255,255,255,.75);
          transition: transform .15s ease, filter .15s ease;
        }
        .enter-btn:hover{ transform:translateY(-2px); filter:brightness(1.05) }
        .hint{
          position:absolute; bottom:12px; left:50%; transform:translateX(-50%);
          font-size:12px; opacity:.7; letter-spacing:.03em;
        }
        #game{
          min-height:100vh; display:none;
          padding:28px;
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(255,255,255,.06), transparent 60%),
            linear-gradient(180deg, #0b0f17, #131b2a);
        }
        .game-card{
          max-width:1100px; margin:0 auto; border-radius:20px;
          padding:24px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          box-shadow:0 10px 30px rgba(0,0,0,.35), inset 0 0 40px rgba(255,255,255,.02);
        }
      `}</style>

      {/* Curtain Overlay */}
      <div className="curtain-overlay" ref={overlayRef}>
        <div className="stage-top-banner">
          <div className="stage-title">Royal Casino • Grand Reveal</div>
        </div>

        <div className="curtain left" id="curtainL">
          <div className="rope"></div>
          <div className="fringe"></div>
        </div>
        <div className="curtain right" id="curtainR">
          <div className="rope"></div>
          <div className="fringe"></div>
        </div>

        <div className="sparkle" ref={sparkleRef}></div>

        <div className="enter-wrap">
          <button className="enter-btn" onClick={handleEnter}>
            Tap to Enter
          </button>
          <div className="hint">Sound on • Best experienced with volume up</div>
        </div>
      </div>

      <Lotteries />

      {/* <section id="game" ref={gameRef}>
        <div className="game-card">
          <h1>PlayZelo • Mines</h1>
          <p>Game content loads after the royal curtain reveal.</p>
          <div
            style={{
              padding: "18px",
              border: "1px dashed rgba(255,255,255,.2)",
              borderRadius: "14px",
            }}
          >
            <strong>YOUR GAME HERE</strong>
          </div>
        </div>
      </section> */}
    </>
  );
}