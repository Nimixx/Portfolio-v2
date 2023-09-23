import { gsap } from 'gsap'

gsap.to('.hero', {
  opacity: 1,
  duration: 0.5,
  ease: 'Power2.easeIn'
})

gsap.to('.hero_article', {
  opacity: 1,
  delay: 0.8,
  duration: 1,
  ease: 'Power1.easeIn'
})
