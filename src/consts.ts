//Global constants
export const SITE_TITLE = 'Nimixx.dev'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const CREATOR_AUTHOR_NAME = 'Tadeáš Thelen'
export const ACTUAL_YEAR = new Date().getFullYear()

//Image authors
export const AUTHOR_HERO = 'Freepik'

//Image sources
export const SOURCE_HERO =
  'https://www.freepik.com/free-vector/gradient-abstract-wireframe-background_15592515.htm#page=3&query=developer%20wallpaper&position=10&from_view=search&track=ais'

//Url constants
export const HOME = '/'
export const PROJECT = '/project'
export const BLOG = '/blog'
export const BIO = '/bio'

//Navigation items
export const NAV_ITEMS = [
  { label: 'Domů', path: HOME },
  { label: 'Projekty', path: PROJECT },
  { label: 'Blog', path: BLOG },
  { label: 'Bio', path: BIO }
]

//Social media

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Nimixx',
    icon: 'simple-icons:github'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/NimixxDev',
    icon: 'simple-icons:twitter'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tadeasthelen/',
    icon: 'simple-icons:linkedin'
  },
  {
    name: 'YouTube',
    href: '/',
    icon: 'simple-icons:youtube'
  }
]

//Mix constants
export const COPYRIGHT = `© ${ACTUAL_YEAR} ${CREATOR_AUTHOR_NAME}`
