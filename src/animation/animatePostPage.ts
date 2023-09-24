import { gsap } from 'gsap'

// Create a GSAP timeline for your existing animations
const tl = gsap.timeline()

// Add animations to the timeline (your existing animations)
tl.to('.post_project', {
  translateY: 0,
  opacity: 1,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
  ease: 'Power4.easeIn'
}).to(
  '.post_skills',
  {
    translateY: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: 'Power4.easeIn'
  },
  '-=2'
)
