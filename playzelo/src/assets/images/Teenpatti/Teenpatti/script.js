// ✅ Directly embedded JSON object (small demo animation)
const loaderJSON = {
  "v": "5.7.8",
  "fr": 30,
  "w": 100,
  "h": 100,
  "nm": "circle loader",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ty": 4,
      "nm": "Circle",
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 1, "k": [
          { "t": 0, "s": 0 },
          { "t": 60, "s": 360 }
        ]},
        "p": { "a": 0, "k": [50, 50, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 0, "k": [100, 100, 100] }
      },
      "shapes": [
        {
          "ty": "el",
          "p": { "a": 0, "k": [0, 0] },
          "s": { "a": 0, "k": [60, 60] }
        },
        { "ty": "st", "c": { "a": 0, "k": [1, 1, 1, 1] }, "w": 6 }
      ]
    }
  ]
};

// Load animation
lottie.loadAnimation({
  container: document.getElementById('lottie-loader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: loaderJSON
});

// Animate Welcome Text
setTimeout(() => {
  const text = document.getElementById('welcome-text');
  text.style.opacity = 1;
  text.style.transform = "scale(1.1)";
}, 500);
