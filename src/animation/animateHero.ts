import { gsap } from 'gsap';

// Common animation function
function animate(
  target: string,
  props: Record<string, any>,
  duration: number = 1,
  delay: number = 0,
  ease: string = 'Power4.easeNone'
) {
  return gsap.to(target, {
    opacity: 1,
    duration,
    delay,
    ease,
    ...props,
  });
}

const isDesktop = window.innerWidth >= 1024; 

if (isDesktop) {

  const tl = gsap.timeline();

  // Animation 1
  tl.add(animate('.base_layer', {}), 0.5);
  tl.add(animate('.rectangle_1', { top: '0' }), '-=1');
  tl.add(animate('.rectangle_2', { right: '0' }), '-=1');
  tl.add(animate('.circle', { top: '0', rotate: '0' }), '-=1');

  // Ball hover
  const ball = document.querySelector('.ball');
  const bioLink = document.querySelector('.bio_link');

  const ballAnimation = gsap.timeline({ paused: true });

  ballAnimation
    .to(ball, {
      right: -5,
      duration: 0.5,
      ease: 'Power4.easeOut',
    })
    .to(
      ball,
      {
        width: '100%',
        duration: 0.5,
        ease: 'Power4.easeOut',
      },
      '-=.2'
    );

  bioLink?.addEventListener('mouseenter', () => {
    ballAnimation.play();
  });

  bioLink?.addEventListener('mouseleave', () => {
    ballAnimation.reverse();
  });
}
