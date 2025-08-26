import { useEffect } from 'react'

function VipJackpotModal() {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const target = new Date(now)
      target.setHours(18, 0, 0, 0)
      if (now > target) target.setDate(target.getDate() + 1)
      const diff = Math.max(0, Math.floor((target - now) / 1000))
      const hrs = String(Math.floor(diff / 3600)).padStart(2, '0')
      const mins = String(Math.floor((diff % 3600) / 60)).padStart(2, '0')
      const secs = String(diff % 60).padStart(2, '0')
      document.getElementById('flip-hours').querySelector('.top').textContent = hrs
      document.getElementById('flip-hours').querySelector('.bottom').textContent = hrs
      document.getElementById('flip-mins').querySelector('.top').textContent = mins
      document.getElementById('flip-mins').querySelector('.bottom').textContent = mins
      document.getElementById('flip-secs').querySelector('.top').textContent = secs
      document.getElementById('flip-secs').querySelector('.bottom').textContent = secs
      const liveCount = document.getElementById('live-count')
      if (liveCount) liveCount.textContent = (parseInt(liveCount.textContent.replace(/,/g, '')) + Math.floor(Math.random() * 6) + 1).toLocaleString()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="vip-jackpot-modal" aria-hidden="true">
      <div className="vip-backdrop" onClick={() => (document.getElementById('vip-jackpot-modal').style.display = 'none')} aria-hidden="true"></div>
      <div className="vip-card" role="dialog" aria-modal="true" aria-label="VIP Daily Lottery">
        <button className="vip-close" aria-label="Close" onClick={() => (document.getElementById('vip-jackpot-modal').style.display = 'none')}>&times;</button>
        <div className="vip-left">
          <img className="vip-logo" src="/assets/logo/logo2.png" alt="Daily Lottery" />
          <div className="vip-hero">
            <div className="vip-badge">DAILY LOTTERY</div>
            <h1 className="vip-title"><span className="gold-shimmer">Win Big — Daily Lottery</span></h1>
            <p className="vip-sub">Entries open 7:00 AM — Close 6:00 PM. Winners announced 7:00 PM.</p>
            <div className="flip-row" aria-live="polite" aria-atomic="true">
              <div className="flip-col">
                <div className="flip-label">HRS</div>
                <div className="flip-card" id="flip-hours">
                  <div className="top">00</div>
                  <div className="bottom">00</div>
                </div>
              </div>
              <div className="sep">:</div>
              <div className="flip-col">
                <div className="flip-label">MIN</div>
                <div className="flip-card" id="flip-mins">
                  <div className="top">00</div>
                  <div className="bottom">00</div>
                </div>
              </div>
              <div className="sep">:</div>
              <div className="flip-col">
                <div className="flip-label">SEC</div>
                <div className="flip-card" id="flip-secs">
                  <div className="top">00</div>
                  <div className="bottom">00</div>
                </div>
              </div>
            </div>
            <div className="vip-cta">
              <button id="vip-join" className="btn-join">Buy Ticket</button>
              <button id="vip-watch" className="btn-ghost">View Lottery Results</button>
            </div>
            <div className="vip-meta">
              <div className="meta-item">🎯 Top Prize <strong>₹50,000</strong></div>
              <div className="meta-item">Tickets sold: <strong id="live-count">1,248</strong></div>
            </div>
          </div>
        </div>
        <aside className="vip-right" aria-hidden="false">
          <div className="right-head">
            <div className="right-title">Recent Winners</div>
            <div className="right-sub">Verified payouts • <strong id="paid-count">1,324</strong></div>
          </div>
          <div className="ticker-wrap" aria-hidden="false">
            <div id="winner-ticker" className="ticker"></div>
          </div>
          <div className="trust">
            <div className="trust-dot"></div>
            <div>Secure payouts • Govt. Licensed</div>
          </div>
        </aside>
      </div>
      <div id="vip-confetti"></div>
    </div>
  )
}

export default VipJackpotModal