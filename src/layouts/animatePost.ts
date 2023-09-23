import { gsap } from 'gsap'

gsap.to('.post_image', {
  height: '24rem',
  duration: 0.5,
  ease: 'Power0.easeNone'
})

gsap.to('.author', {
  opacity: 1,
  translateY: 0,
  delay: 0.5,
  duration: 0.5,
  ease: 'Power0.easeNone'
})

gsap.to('.post aside a', {
  opacity: 1,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
  ease: 'Power0.easeNone'
})
