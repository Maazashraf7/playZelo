export function startMoneyRain() {
  setInterval(() => {
    const note = document.createElement('div')
    note.classList.add('money-note')
    note.innerText = '💵'
    note.style.left = `${Math.random() * 100}%`
    note.style.animationDuration = `${Math.random() * 2 + 2}s`
    document.getElementById('moneyRain')?.appendChild(note)
    setTimeout(() => note.remove(), 3000)
  }, 200)
}

export function showNextPopup() {
  const winners = [
    { name: 'Rahul', amount: '₹20,000' },
    { name: 'Meena', amount: '₹50,000' },
    { name: 'Suresh', amount: '₹15,000' },
    { name: 'Priya', amount: '₹32,500' },
    { name: 'Amit', amount: '₹10,000' },
    { name: 'Divya', amount: '₹25,000' },
    { name: 'Rohit', amount: '₹40,000' }
  ]
  let winnerIndex = 0
  const popupContainer = document.getElementById('popupContainer')
  const winner = winners[winnerIndex]
  const popup = document.createElement('div')
  popup.className = 'money-popup'
  popup.innerText = `🎉 Congratulations ${winner.name} won ${winner.amount}`
  popupContainer?.appendChild(popup)
  setTimeout(() => popup.remove(), 4000)
  winnerIndex = (winnerIndex + 1) % winners.length
}