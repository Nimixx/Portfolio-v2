import { gsap } from 'gsap'

// Create a GSAP timeline for your existing animations
const tl = gsap.timeline()

// Add animations to the timeline (your existing animations)
tl.to('.last_post', {
  translateY: '0%',
  opacity: 1,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  ease: 'Power2.easeIn'
}).to(
  ['.post_title', '.post_date'],
  {
    opacity: 1,
    duration: 1,
    ease: 'Power0.easeNone'
  },
  '+=0.2'
)
