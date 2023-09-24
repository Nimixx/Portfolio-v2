import { gsap } from 'gsap'

const value = 5550 
const space = 150

gsap.set('.box', {
  x: (i) => i * space
})

gsap.to('.box', {
  duration: 144,
  ease: "Power0.easeNone",
  x: `-=${value}`, 
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % value) 
  },
  repeat: -1
})

gsap.to('.icon_container', {
  opacity: 1,
  duration: 1,
  delay: 2,
  ease: "Power0.easeNone",
})