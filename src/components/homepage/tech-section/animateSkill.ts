import { gsap } from 'gsap'

const value = 5550 // Change this value to adjust the spacing between icons

gsap.set('.box', {
  x: (i) => i * 150 // Increase spacing by changing the multiplier
})

gsap.to('.box', {
  duration: 144,
  ease: "Power0.easeNone",
  x: `-=${value}`, // Increase the spacing between icons
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % value) // Adjust the modulo value accordingly
  },
  repeat: -1
})
