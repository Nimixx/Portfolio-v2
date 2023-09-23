import { gsap } from 'gsap'

// Create a GSAP timeline
const tl = gsap.timeline()

// Add animations to the timeline
tl.to('.hero_img', {
  translateY: '0%',
  duration: 1.5,
  delay: 0.5,
  ease: 'Bounce.easeOut'
})
.to(
  ['.hero_title', '.hero_author'], // Use an array to select multiple elements
  {
    opacity: 1,
    duration: 1,
    ease: 'Power0.easeNone'
  },
  '+=0.2'
)

