import { gsap } from 'gsap'

type AnimationProps = {
  opacity?: number
  top?: string | number
  right?: string | number
  rotate?: string | number
}

function animateElement(
  target: string,
  props: AnimationProps,
  duration = 1,
  delay = 0,
  ease = 'Power4.easeNone'
) {
  return gsap.to(target, {
    opacity: 1,
    duration,
    delay,
    ease,
    ...props
  })
}

const tl = gsap.timeline()

tl.add(animateElement('.base_layer', {}), 0.5)
tl.add(animateElement('.rectangle_1', { top: '0' }), '-=1')
tl.add(animateElement('.rectangle_2', { right: '0' }), '-=1')
tl.add(animateElement('.circle', { top: '0', rotate: '0' }), '-=1')

